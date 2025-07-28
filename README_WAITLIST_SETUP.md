# Waitlist Table Setup Instructions

Since the Supabase CLI isn't fully configured, you'll need to manually create the waitlist table in your Supabase dashboard.

## Steps:

1. Go to your Supabase project dashboard: https://cjisndagaznbtresanjv.supabase.co
2. Navigate to the "SQL Editor" section
3. Copy and paste the following SQL and execute it:

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    organization TEXT,
    practice_area TEXT,
    use_case TEXT,
    agree_to_updates BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add RLS (Row Level Security)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for waitlist signup)
CREATE POLICY "Allow anonymous inserts" ON public.waitlist
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to read all waitlist entries (for admin)
CREATE POLICY "Allow authenticated users to read waitlist" ON public.waitlist
    FOR SELECT
    TO authenticated
    USING (true);

-- Create policy to allow authenticated users to update waitlist entries (for admin)
CREATE POLICY "Allow authenticated users to update waitlist" ON public.waitlist
    FOR UPDATE
    TO authenticated
    USING (true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS waitlist_status_idx ON public.waitlist(status);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON public.waitlist(created_at DESC);
```

4. After running the SQL, test the waitlist form on your website

## Alternative: Use Table Editor

1. Go to your Supabase dashboard
2. Navigate to "Table Editor"
3. Click "Create a new table"
4. Set table name as "waitlist"
5. Add the following columns:
   - `id` (uuid, primary key, default: gen_random_uuid())
   - `full_name` (text, required)
   - `email` (text, required)
   - `organization` (text, optional)
   - `practice_area` (text, optional)
   - `use_case` (text, optional)
   - `agree_to_updates` (boolean, default: false)
   - `status` (text, default: 'pending')
   - `created_at` (timestamptz, default: now())

6. Enable RLS and add the policies from the SQL above

## Test the Integration

Once the table is created, you can test the waitlist form by:
1. Running `node test-waitlist.js` from the project root
2. Or testing the form directly on your website

The form will now save directly to your Supabase database instead of using Notion.