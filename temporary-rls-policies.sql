-- Temporary RLS policies that work with Clerk's default JWT structure
-- Run this until you create the Supabase JWT template in Clerk

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view their own subscription" ON subscriptions;
DROP POLICY IF EXISTS "Users can insert their own subscription" ON subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscription" ON subscriptions;

-- Create temporary policies that work with basic Clerk JWT
-- These extract the 'sub' claim from the JWT payload
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (user_id = (current_setting('request.jwt.claims', true)::json->>'sub'));

CREATE POLICY "Users can insert their own profile"
ON profiles FOR INSERT
WITH CHECK (user_id = (current_setting('request.jwt.claims', true)::json->>'sub'));

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
USING (user_id = (current_setting('request.jwt.claims', true)::json->>'sub'));

CREATE POLICY "Users can view their own subscription"
ON subscriptions FOR SELECT
USING (user_id = (current_setting('request.jwt.claims', true)::json->>'sub'));

CREATE POLICY "Users can insert their own subscription"
ON subscriptions FOR INSERT
WITH CHECK (user_id = (current_setting('request.jwt.claims', true)::json->>'sub'));

CREATE POLICY "Users can update their own subscription"
ON subscriptions FOR UPDATE
USING (user_id = (current_setting('request.jwt.claims', true)::json->>'sub'));