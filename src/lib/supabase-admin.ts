import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase service role environment variables');
}

// Admin client that bypasses RLS - only use for onboarding and admin operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

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

export const adminProfileService = {
  async createProfile(profileData: Omit<Profile, 'id' | 'created_at' | 'updated_at'>) {
    // First check if profile already exists
    const existingProfile = await this.getProfile(profileData.user_id);
    if (existingProfile) {
      // Update existing profile instead
      return await this.updateProfile(profileData.user_id, profileData);
    }

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .insert(profileData)
      .select()
      .single();
    
    if (error) {
      console.error('Admin profile creation error:', error);
      throw error;
    }
    return data;
  },

  async getProfile(userId: string) {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      console.error('Admin profile fetch error:', error);
      return null;
    }
    return data;
  },

  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) {
      console.error('Admin profile update error:', error);
      throw error;
    }
    return data;
  }
};

export const adminSubscriptionService = {
  async createSubscription(subscriptionData: Omit<Subscription, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabaseAdmin
      .from('subscriptions')
      .insert(subscriptionData)
      .select()
      .single();
    
    if (error) {
      console.error('Admin subscription creation error:', error);
      throw error;
    }
    return data;
  },

  async getSubscription(userId: string) {
    const { data, error } = await supabaseAdmin
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      console.error('Admin subscription fetch error:', error);
      return null;
    }
    return data;
  },

  async updateSubscription(userId: string, updates: Partial<Subscription>) {
    const { data, error } = await supabaseAdmin
      .from('subscriptions')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) {
      console.error('Admin subscription update error:', error);
      throw error;
    }
    return data;
  },

  async startFreeTrial(userId: string) {
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

    return await this.createSubscription(subscriptionData);
  },

  async upgradeToProfessional(userId: string) {
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

    return await this.updateSubscription(userId, updates);
  }
};