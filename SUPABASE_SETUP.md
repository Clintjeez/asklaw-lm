# Supabase Integration Setup

This document outlines how to set up Supabase for storing onboarding data and subscription tracking.

## Important Note

⚠️ **This setup requires Clerk JWT templates to work properly.** 

For the complete Clerk + Supabase integration guide, see:
- `CLERK_SUPABASE_SETUP.md` - Complete setup with authentication
- `CREATE_CLERK_JWT_TEMPLATE.md` - Step-by-step JWT template creation
- `temporary-rls-policies.sql` - Temporary fix while setting up

## Environment Variables

Add these environment variables to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Setup

1. Run the SQL schema in your Supabase SQL editor:

```sql
-- Copy and paste the contents of database-schema.sql
```

The schema creates:
- `profiles` table for user onboarding data
- `subscriptions` table for trial/paid user tracking
- Row Level Security policies
- Indexes for performance
- Triggers for automatic timestamp updates

## Features Implemented

### Profile Management
- ✅ Store profile data from onboarding flow
- ✅ Update profile information
- ✅ Retrieve user profile data

### Subscription Management  
- ✅ Create trial subscriptions (5 days, 1000 credits)
- ✅ Track subscription status and credits
- ✅ Upgrade to professional plan (5000 credits, 100GB storage)
- ✅ Handle subscription expiration dates

### Data Flow
1. User completes profile setup → Data stored in `profiles` table
2. User completes workspace setup → Jurisdictions, legal services, and document types stored
3. User selects subscription plan → Creates record in `subscriptions` table
4. Trial users get 5-day access with 1000 credits
5. Pro users get monthly access with 5000 credits + 100GB storage

## Security
- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- JWT token validation for all operations

## Usage Examples

### Get User Profile
```typescript
import { profileService } from '@/lib/supabase';

const profile = await profileService.getProfile(user.id);
```

### Get User Subscription
```typescript
import { subscriptionService } from '@/lib/supabase';

const subscription = await subscriptionService.getSubscription(user.id);
```

### Start Free Trial
```typescript
const trial = await subscriptionService.startFreeTrial(user.id);
```