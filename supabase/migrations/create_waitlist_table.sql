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

-- Add index for faster email lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist(email);

-- Add index for status filtering
CREATE INDEX IF NOT EXISTS waitlist_status_idx ON public.waitlist(status);

-- Add index for created_at for sorting
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON public.waitlist(created_at DESC);