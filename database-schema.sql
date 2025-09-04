-- Update existing profiles table with onboarding data columns
-- First, add new columns if they don't exist
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS first_name TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_name TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS organization TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS jurisdictions TEXT[] DEFAULT '{}';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS legal_services TEXT[] DEFAULT '{}';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS document_types TEXT[] DEFAULT '{}';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS user_id TEXT;

-- Add unique constraint on user_id if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'profiles_user_id_key' 
        AND conrelid = 'profiles'::regclass
    ) THEN
        ALTER TABLE profiles ADD CONSTRAINT profiles_user_id_key UNIQUE (user_id);
    END IF;
END $$;

-- Update existing records to set non-null constraints where possible
-- (You may need to update this based on your existing data)
UPDATE profiles SET first_name = COALESCE(first_name, '') WHERE first_name IS NULL;
UPDATE profiles SET last_name = COALESCE(last_name, '') WHERE last_name IS NULL;

-- Handle user_id null values - you may need to map existing profiles to Clerk user IDs
-- For now, we'll set a placeholder value for existing records without user_id
-- You should update these with actual Clerk user IDs later
UPDATE profiles SET user_id = COALESCE(user_id, 'temp_' || id::text) WHERE user_id IS NULL OR user_id = '';

-- Add NOT NULL constraints for required fields
ALTER TABLE profiles ALTER COLUMN first_name SET NOT NULL;
ALTER TABLE profiles ALTER COLUMN last_name SET NOT NULL;
ALTER TABLE profiles ALTER COLUMN user_id SET NOT NULL;

-- Subscriptions table to track trials and paid users
CREATE TABLE subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL, -- Clerk user ID
    plan_type TEXT NOT NULL CHECK (plan_type IN ('trial', 'professional')),
    status TEXT NOT NULL CHECK (status IN ('active', 'inactive', 'expired', 'cancelled')),
    credits_remaining INTEGER NOT NULL DEFAULT 0,
    credits_total INTEGER NOT NULL DEFAULT 0,
    trial_start_date TIMESTAMP WITH TIME ZONE,
    trial_end_date TIMESTAMP WITH TIME ZONE,
    subscription_start_date TIMESTAMP WITH TIME ZONE,
    subscription_end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance (only if they don't exist)
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_plan_type ON subscriptions(plan_type);

-- Enable Row Level Security (RLS) if not already enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;

-- RLS policies for profiles (users can only access their own profile)
-- Updated for Clerk JWT token structure
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own profile"
ON profiles FOR INSERT
WITH CHECK (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
USING (user_id = auth.jwt() ->> 'sub');

-- RLS policies for subscriptions (users can only access their own subscription)  
-- Updated for Clerk JWT token structure
CREATE POLICY "Users can view their own subscription"
ON subscriptions FOR SELECT
USING (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own subscription"
ON subscriptions FOR INSERT
WITH CHECK (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own subscription"
ON subscriptions FOR UPDATE
USING (user_id = auth.jwt() ->> 'sub');

-- Function to update the updated_at timestamp (CREATE OR REPLACE is safe)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing triggers if they exist to avoid conflicts
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
DROP TRIGGER IF EXISTS update_subscriptions_updated_at ON subscriptions;

-- Triggers to automatically update updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();