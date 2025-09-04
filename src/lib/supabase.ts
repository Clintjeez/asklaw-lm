import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

// Simple approach: Use Supabase with Clerk session token
export const createClerkSupabaseClient = async (getToken: () => Promise<string | null>) => {
  try {
    // Get Clerk session token
    const sessionToken = await (getToken as any)({ template: 'supabase' });
    
    if (sessionToken) {
      return createClient(supabaseUrl, supabaseKey, {
        global: {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        },
        auth: {
          persistSession: false,
        }
      });
    }
  } catch (error) {
    console.warn('Using fallback authentication');
  }
  
  // Fallback to basic client
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    }
  });
};

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Profile {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  title: string;
  organization: string;
  phone: string;
  jurisdictions: string[];
  legal_services: string[];
  document_types: string[];
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: 'trial' | 'professional';
  status: 'active' | 'inactive' | 'expired' | 'cancelled';
  credits_remaining: number;
  credits_total: number;
  trial_start_date: string | null;
  trial_end_date: string | null;
  subscription_start_date: string | null;
  subscription_end_date: string | null;
  created_at: string;
  updated_at: string;
}

export const profileService = {
  async createProfile(
    profileData: Omit<Profile, 'id' | 'created_at' | 'updated_at'>, 
    getToken: () => Promise<string | null>
  ) {
    const client = await createClerkSupabaseClient(getToken);
    
    // First check if profile already exists
    const existingProfile = await this.getProfile(profileData.user_id, getToken);
    if (existingProfile) {
      // Update existing profile instead
      return await this.updateProfile(profileData.user_id, profileData, getToken);
    }

    // Make sure we don't pass any id field
    const cleanProfileData = {
      user_id: profileData.user_id,
      first_name: profileData.first_name,
      last_name: profileData.last_name,
      title: profileData.title,
      organization: profileData.organization,
      phone: profileData.phone,
      jurisdictions: profileData.jurisdictions,
      legal_services: profileData.legal_services,
      document_types: profileData.document_types
    };

    const { data, error } = await client
      .from('profiles')
      .insert(cleanProfileData)
      .select()
      .single();
    
    if (error) {
      console.error('Profile creation error:', error);
      throw error;
    }
    return data;
  },

  async getProfile(userId: string, getToken: () => Promise<string | null>) {
    const client = await createClerkSupabaseClient(getToken);
    
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      console.error('Profile fetch error:', error);
      return null;
    }
    return data;
  },

  async updateProfile(
    userId: string, 
    updates: Partial<Profile>, 
    getToken: () => Promise<string | null>
  ) {
    const client = await createClerkSupabaseClient(getToken);
    
    const { data, error } = await client
      .from('profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) {
      console.error('Profile update error:', error);
      throw error;
    }
    return data;
  }
};

export const subscriptionService = {
  async createSubscription(
    subscriptionData: Omit<Subscription, 'id' | 'created_at' | 'updated_at'>,
    getToken: () => Promise<string | null>
  ) {
    const client = await createClerkSupabaseClient(getToken);
    
    const { data, error } = await client
      .from('subscriptions')
      .insert(subscriptionData)
      .select()
      .single();
    
    if (error) {
      console.error('Subscription creation error:', error);
      throw error;
    }
    return data;
  },

  async getSubscription(userId: string, getToken: () => Promise<string | null>) {
    const client = await createClerkSupabaseClient(getToken);
    
    const { data, error } = await client
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      console.error('Subscription fetch error:', error);
      return null;
    }
    return data;
  },

  async updateSubscription(
    userId: string, 
    updates: Partial<Subscription>,
    getToken: () => Promise<string | null>
  ) {
    const client = await createClerkSupabaseClient(getToken);
    
    const { data, error } = await client
      .from('subscriptions')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) {
      console.error('Subscription update error:', error);
      throw error;
    }
    return data;
  },

  async startFreeTrial(userId: string, getToken: () => Promise<string | null>) {
    const trialStartDate = new Date();
    const trialEndDate = new Date();
    trialEndDate.setDate(trialStartDate.getDate() + 5); // 5-day trial

    const subscriptionData = {
      user_id: userId,
      plan_type: 'trial' as const,
      status: 'active' as const,
      credits_remaining: 1000,
      credits_total: 1000,
      trial_start_date: trialStartDate.toISOString(),
      trial_end_date: trialEndDate.toISOString(),
      subscription_start_date: null,
      subscription_end_date: null
    };

    return await this.createSubscription(subscriptionData, getToken);
  },

  async upgradeToProfessional(userId: string, getToken: () => Promise<string | null>) {
    const subscriptionStartDate = new Date();
    const subscriptionEndDate = new Date();
    subscriptionEndDate.setMonth(subscriptionStartDate.getMonth() + 1); // 1 month

    const updates = {
      plan_type: 'professional' as const,
      status: 'active' as const,
      credits_remaining: 5000,
      credits_total: 5000,
      subscription_start_date: subscriptionStartDate.toISOString(),
      subscription_end_date: subscriptionEndDate.toISOString()
    };

    return await this.updateSubscription(userId, updates, getToken);
  }
};