# Create Clerk JWT Template for Supabase

## Quick Fix Steps

### 1. Run Temporary RLS Policies
First, run the SQL in `temporary-rls-policies.sql` in your Supabase SQL editor to temporarily fix the authentication issue.

### 2. Create Clerk JWT Template

1. **Open Clerk Dashboard**
   - Go to [clerk.com/dashboard](https://dashboard.clerk.com)
   - Select your project

2. **Navigate to JWT Templates**
   - In the sidebar, click **"JWT Templates"**
   - Click **"New template"** button

3. **Configure the Template**
   - **Name**: `supabase` (exactly this name)
   - **Signing algorithm**: `HS256`
   - **Token lifetime**: `3600` seconds (1 hour)

4. **Set the Claims**
   Copy and paste this exact JSON structure (use Clerk's built-in Supabase template):
   ```json
   {
     "aud": "authenticated",
     "exp": {{exp}},
     "iat": {{iat}},
     "iss": "{{issuer}}",
     "sub": "{{user.id}}",
     "email": "{{user.primary_email_address.email_address}}",
     "phone": "{{user.primary_phone_number.phone_number}}",
     "app_metadata": {
       "provider": "clerk",
       "providers": ["clerk"]
     },
     "user_metadata": {
       "first_name": "{{user.first_name}}",
       "last_name": "{{user.last_name}}"
     },
     "role": "authenticated"
   }
   ```
   
   **Note**: `{{exp}}` and `{{iat}}` are special Clerk variables that don't need quotes - they're automatically populated with timestamp values.

5. **Save the Template**
   - Click **"Apply changes"**
   - The template should now be active

### 3. Update Database Policies (After Template Creation)

Once the JWT template is created, run this SQL to restore proper RLS policies:

```sql
-- Drop temporary policies
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;  
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view their own subscription" ON subscriptions;
DROP POLICY IF EXISTS "Users can insert their own subscription" ON subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscription" ON subscriptions;

-- Create proper policies for Clerk JWT
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own profile" 
ON profiles FOR INSERT
WITH CHECK (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE  
USING (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can view their own subscription"
ON subscriptions FOR SELECT
USING (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own subscription"
ON subscriptions FOR INSERT
WITH CHECK (user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own subscription" 
ON subscriptions FOR UPDATE
USING (user_id = auth.jwt() ->> 'sub');
```

### 4. Test the Integration

1. **Clear browser cache/cookies**
2. **Sign in to your app**
3. **Complete the onboarding flow**
4. **Check Supabase database** - data should now be saved properly

## Troubleshooting

### "No JWT template exists with name: supabase"
- **Solution**: Template not created yet or wrong name
- Check template name is exactly `supabase` (lowercase)
- Ensure template is saved and active in Clerk dashboard
- Try refreshing browser and signing out/in

### "new row violates row-level security policy"
- **Solution**: Run the temporary RLS policies first
- Execute `temporary-rls-policies.sql` in Supabase SQL editor
- Check that user_id in database matches Clerk user ID
- Verify JWT token includes 'sub' claim with user ID

### JWT Template Creation Issues
- **Invalid JSON**: Use Clerk's pre-built Supabase template instead
- **Syntax errors**: Remember `{{exp}}` and `{{iat}}` have no quotes
- **Missing claims**: Ensure 'sub', 'aud', and 'role' are included

### Authentication Still Failing?
1. **Check browser network tab**: Look for Authorization headers in requests
2. **Inspect JWT token**: Copy token and decode at jwt.io to verify claims
3. **Clear auth state**: Sign out, clear browser cache, sign back in
4. **Fallback mode**: The code includes fallback authentication that should work

### Database Connection Issues
- Verify Supabase environment variables are correct
- Check Supabase project is active and accessible
- Ensure RLS is enabled on both tables

### Need immediate testing?
Run `temporary-rls-policies.sql` - this allows testing while you set up the proper JWT template.