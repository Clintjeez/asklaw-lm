'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useAuth } from '@clerk/nextjs';
import ProfileSetup from './ProfileSetup';
import WorkspaceSetup from './WorkspaceSetup';
import Subscription from './Subscription';
import AuthLayout from './AuthLayout';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle } from 'lucide-react';
import { profileService, subscriptionService } from '@/lib/supabase';
import { toast } from 'sonner';

export interface OnboardingData {
  profile?: {
    firstName: string;
    lastName: string;
    title: string;
    organization: string;
    phone: string;
  };
  workspace?: {
    jurisdictions: string[];
    legalServices: string[];
    documentTypes: string[];
  };
  subscription?: {
    plan: string;
  };
}

const STEPS = [
  { id: 'profile', title: 'Profile Setup', description: 'Basic information' },
  {
    id: 'workspace',
    title: 'Workspace Setup',
    description: 'Legal preferences',
  },
  {
    id: 'subscription',
    title: 'Subscription',
    description: 'Choose your plan',
  },
];

const Onboarding = () => {
  const router = useRouter();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const handleNext = async (stepData?: OnboardingData[keyof OnboardingData]) => {
    if (!user) {
      toast.error('User not authenticated');
      return;
    }

    const stepId = STEPS[currentStep].id as keyof OnboardingData;

    if (stepData) {
      setOnboardingData((prev) => ({ ...prev, [stepId]: stepData }));
    }

    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps((prev) => [...prev, currentStep]);
    }

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await handleComplete(stepData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    router.push('/dashboard');
  };

  const handleComplete = async (finalStepData?: OnboardingData[keyof OnboardingData]) => {
    if (!user) {
      toast.error('User not authenticated');
      return;
    }

    setIsLoading(true);

    try {
      const finalData = finalStepData 
        ? { ...onboardingData, subscription: finalStepData }
        : onboardingData;

      // Save profile data if available
      if (finalData.profile && finalData.workspace) {
        const profileData = {
          user_id: user.id,
          first_name: finalData.profile.firstName,
          last_name: finalData.profile.lastName,
          title: finalData.profile.title,
          organization: finalData.profile.organization || '',
          phone: finalData.profile.phone || '',
          jurisdictions: finalData.workspace.jurisdictions || [],
          legal_services: finalData.workspace.legalServices || [],
          document_types: finalData.workspace.documentTypes || []
        };

        await profileService.createProfile(profileData, getToken);
      }

      // Handle subscription
      const subscriptionData = finalData.subscription as { plan: string } | undefined;
      if (subscriptionData?.plan === 'trial') {
        await subscriptionService.startFreeTrial(user.id, getToken);
        toast.success('Free trial started successfully!');
      } else if (subscriptionData?.plan === 'pro') {
        // For now, just create the subscription record - payment integration would go here
        await subscriptionService.upgradeToProfessional(user.id, getToken);
        toast.success('Professional plan activated!');
      }

      toast.success('Profile setup complete!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      toast.error('Failed to save profile data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderCurrentStep = () => {
    switch (STEPS[currentStep].id) {
      case 'profile':
        return (
          <ProfileSetup
            onNext={handleNext}
            onBack={currentStep > 0 ? handleBack : undefined}
            onSkip={handleSkip}
            initialData={onboardingData.profile}
          />
        );
      case 'workspace':
        return (
          <WorkspaceSetup
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
            initialData={onboardingData.workspace}
          />
        );
      case 'subscription':
        return (
          <Subscription
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
            initialData={onboardingData.subscription}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AuthLayout>
      <div className='h-full flex flex-col overflow-scroll py-2'>
        {/* Header with Progress */}
        <div className='p-8 pb-0'>
          <div className='mb-4'>
            <div className='flex items-center justify-between mb-4'>
              <h1 className='text-[32px] font-medium text-[#0a0a0a]'>
                Welcome to AskLawLM
              </h1>
              {/* <Button
                variant='ghost'
                onClick={handleSkip}
                className='text-[#83a17d] hover:text-[#6d8a67]'
              >
                Skip for now
              </Button> */}
            </div>
            <p className='text-[15px] text-gray-600 mb-6'>
              Let's set up your legal workspace to provide you with personalized
              assistance.
            </p>

            {/* Progress Bar */}
            <div className='mb-6'>
              <Progress value={progress} className='h-2' />
              <div className='flex justify-between mt-2 text-sm text-gray-500'>
                <span>
                  Step {currentStep + 1} of {STEPS.length}
                </span>
                <span>{Math.round(progress)}% complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Step Content */}
        <div className='flex-1 px-8'>{renderCurrentStep()}</div>
      </div>
    </AuthLayout>
  );
};

export default Onboarding;
