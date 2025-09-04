# Clerk + Supabase Integration Setup

This guide walks you through setting up Clerk authentication with Supabase Row Level Security (RLS) for your AskLaw-LM project.

## Prerequisites

- Clerk account and project set up
- Supabase account and project set up
- Both environment variables configured

## Step 1: Configure Clerk JWT Template

1. **Go to your Clerk Dashboard**
   - Navigate to your Clerk project dashboard
   - Go to **JWT Templates** in the sidebar

2. **Create Supabase JWT Template**
   - Click "New template"
   - Choose "Supabase" from the predefined templates
   - Name it `supabase`

3. **Configure the Template**
   **Option A**: Choose "Supabase" from Clerk's pre-built templates (Recommended)
   - Click "New template" 
   - Select "Supabase" from the dropdown
   - Name it `supabase`
   - Clerk will auto-populate the correct syntax

   **Option B**: Manual configuration (if pre-built template not available):
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
   
   **Note**: `{{exp}}`, `{{iat}}`, and `{{issuer}}` are special Clerk variables without quotes.

4. **Save the Template**

## Step 2: Configure Supabase

1. **Update your Supabase project settings**
   - Go to Settings > Auth > JWT Settings
   - Set JWT Secret to match your Clerk JWT signing secret (if using custom)
   - Or use the default Supabase JWT secret

2. **Run the Database Schema**
   Execute the SQL in `database-schema.sql` in your Supabase SQL editor.

## Step 3: Environment Variables

Add these to your `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk (should already be configured)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

## Step 4: Test the Integration

1. **Sign up a new user through Clerk**
2. **Complete the onboarding flow**
3. **Check Supabase database** - you should see:
   - New profile record in `profiles` table
   - New subscription record in `subscriptions` table
   - Data properly associated with the Clerk user ID

## How It Works

### Authentication Flow
1. User signs in with Clerk
2. Clerk generates a JWT with Supabase-compatible claims
3. Our Supabase client uses `getToken({ template: 'supabase' })` to get the JWT
4. JWT is sent with all Supabase requests
5. Supabase RLS policies validate `auth.jwt() ->> 'sub'` matches `user_id`

### Row Level Security
- **Profiles**: Users can only read/write their own profile data
- **Subscriptions**: Users can only access their own subscription data
- **JWT Claims**: The `sub` claim contains the Clerk user ID
- **Database**: `user_id` columns store Clerk user IDs

## Troubleshooting

### "new row violates row-level security policy"
- Check that JWT template is named exactly `supabase`
- Verify the JWT template includes the correct `sub` claim
- Ensure `user_id` in database matches Clerk user ID

### "Missing Supabase environment variables"
- Double-check `.env.local` has all required variables
- Restart your development server after adding variables

### Authentication not working
- Verify Clerk JWT template is active
- Check browser network tab for JWT token in Authorization headers
- Test with a fresh browser session/incognito mode

## Security Notes

- ✅ RLS is enabled and properly configured
- ✅ Users can only access their own data
- ✅ JWT tokens are validated server-side
- ✅ No sensitive data exposed in client-side code
- ✅ Service role key is only used for admin operations (if needed)

## Next Steps

Once this is working:
1. Add subscription status checks in your app
2. Implement credit usage tracking
3. Add payment integration for professional plans
4. Set up automated subscription renewal