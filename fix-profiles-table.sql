-- Simple fix for the profiles table structure
-- Run this in your Supabase SQL editor

-- Make sure the id column has a default UUID
ALTER TABLE profiles ALTER COLUMN id SET DEFAULT gen_random_uuid();

-- Disable RLS temporarily to test (we'll re-enable it once working)
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions DISABLE ROW LEVEL SECURITY;

-- Drop all policies
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view their own subscription" ON subscriptions;
DROP POLICY IF EXISTS "Users can insert their own subscription" ON subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscription" ON subscriptions;

-- Simple test: Check if you can insert a test record
-- DELETE FROM profiles WHERE user_id = 'test_user_123';
-- INSERT INTO profiles (user_id, first_name, last_name, title) 
-- VALUES ('test_user_123', 'Test', 'User', 'Tester');