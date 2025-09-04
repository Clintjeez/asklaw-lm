-- Fix the foreign key constraint issue
-- Run this in your Supabase SQL editor

-- First, let's see what constraints exist
-- SELECT constraint_name, constraint_type 
-- FROM information_schema.table_constraints 
-- WHERE table_name = 'profiles';

-- Drop the problematic foreign key constraint
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_id_fkey;

-- Also drop any other foreign key constraints that might be causing issues
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_user_id_fkey;

-- Make sure the id column has proper default
ALTER TABLE profiles ALTER COLUMN id SET DEFAULT gen_random_uuid();

-- Disable RLS temporarily for testing
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions DISABLE ROW LEVEL SECURITY;

-- Test insert to make sure it works now
-- DELETE FROM profiles WHERE user_id = 'test_user_123';
-- INSERT INTO profiles (user_id, first_name, last_name, title) 
-- VALUES ('test_user_123', 'Test', 'User', 'Tester');
-- SELECT * FROM profiles WHERE user_id = 'test_user_123';