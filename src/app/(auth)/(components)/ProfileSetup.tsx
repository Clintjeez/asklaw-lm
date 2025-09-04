'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

interface ProfileData {
  firstName: string;
  lastName: string;
  title: string;
  organization: string;
  phone: string;
}

interface ProfileSetupProps {
  onNext: (data: ProfileData) => void;
  onBack?: () => void;
  onSkip: () => void;
  initialData?: ProfileData;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({
  onNext,
  onBack,
  onSkip,
  initialData,
}) => {
  const [formData, setFormData] = useState<ProfileData>({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    title: initialData?.title || '',
    organization: initialData?.organization || '',
    phone: initialData?.phone || '',
  });

  const [errors, setErrors] = useState<Partial<ProfileData>>({});

  const validateForm = () => {
    const newErrors: Partial<ProfileData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Professional title is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className='space-y-4 '>
      <Card className='border-0 shadow-none bg-[#fbfbf9]'>
        <CardHeader className='px-0 pb-6'>
          <CardTitle className='text-[24px] font-medium text-[#0a0a0a]'>
            Professional Profile
          </CardTitle>
          <CardDescription className='text-[15px] text-gray-600'>
            Tell us about your legal practice to provide you with tailored
            assistance.
          </CardDescription>
        </CardHeader>

        <CardContent className='px-0 space-y-6'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name Fields */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='firstName' className='text-[16px] font-medium'>
                  First Name *
                </Label>
                <Input
                  id='firstName'
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange('firstName', e.target.value)
                  }
                  placeholder='Enter your first name'
                  className={`h-12 text-[16px] border-[#0a0a0a] ${
                    errors.firstName ? 'border-red-500' : ''
                  }`}
                />
                {errors.firstName && (
                  <p className='text-sm text-red-500'>{errors.firstName}</p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='lastName' className='text-[16px] font-medium'>
                  Last Name *
                </Label>
                <Input
                  id='lastName'
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange('lastName', e.target.value)
                  }
                  placeholder='Enter your last name'
                  className={`h-12 text-[16px] border-[#0a0a0a] ${
                    errors.lastName ? 'border-red-500' : ''
                  }`}
                />
                {errors.lastName && (
                  <p className='text-sm text-red-500'>{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Professional Title */}
            <div className='space-y-2'>
              <Label htmlFor='title' className='text-[16px] font-medium'>
                Professional Title *
              </Label>
              <Input
                id='title'
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder='e.g., Attorney, Legal Counsel, Paralegal'
                className={`h-12 text-[16px] border-[#0a0a0a] ${
                  errors.title ? 'border-red-500' : ''
                }`}
              />
              {errors.title && (
                <p className='text-sm text-red-500'>{errors.title}</p>
              )}
            </div>

            {/* Organization */}
            <div className='space-y-2'>
              <Label htmlFor='organization' className='text-[16px] font-medium'>
                Organization
              </Label>
              <Input
                id='organization'
                value={formData.organization}
                onChange={(e) =>
                  handleInputChange('organization', e.target.value)
                }
                placeholder='Law firm, company, or organization name'
                className='h-12 text-[16px] border-[#0a0a0a]'
              />
            </div>

            {/* Phone */}
            <div className='space-y-2'>
              <Label htmlFor='phone' className='text-[16px] font-medium'>
                Phone Number
              </Label>
              <Input
                id='phone'
                type='tel'
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder='(555) 123-4567'
                className='h-12 text-[16px] border-[#0a0a0a]'
              />
            </div>

            {/* Action Buttons */}
            <div className='flex justify-between pt-6'>
              <div className='flex gap-4'>
                {onBack && (
                  <Button
                    type='button'
                    variant='outline'
                    onClick={onBack}
                    className='border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white'
                  >
                    <ChevronLeft className='w-4 h-4 mr-2' />
                    Back
                  </Button>
                )}
              </div>

              <Button
                type='submit'
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 h-12'
              >
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSetup;
