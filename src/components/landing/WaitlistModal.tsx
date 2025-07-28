import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WaitlistData {
  fullName: string;
  email: string;
  organization: string;
  practiceArea: string;
  useCase: string;
  agreeToUpdates: boolean;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState<WaitlistData>({
    fullName: '',
    email: '',
    organization: '',
    practiceArea: '',
    useCase: '',
    agreeToUpdates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    field: keyof WaitlistData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please enter your full name.',
        variant: 'destructive',
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please enter your email address.',
        variant: 'destructive',
      });
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Validation Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formData);
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Submit directly to Supabase waitlist table
      const { data, error } = await supabase
        .from('waitlist')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          organization: formData.organization || null,
          practice_area: formData.practiceArea || null,
          use_case: formData.useCase || null,
          agree_to_updates: formData.agreeToUpdates,
          status: 'pending'
        });

      if (error) {
        throw error;
      }

      console.log('Waitlist submission successful:', data);
      setIsSuccess(true);
      toast({
        title: 'Success!',
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          organization: '',
          practiceArea: '',
          useCase: '',
          agreeToUpdates: false,
        });
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      
      toast({
        title: 'Error',
        description: 'Failed to join waitlist. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      onClose();
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className='sm:max-w-md'>
          <div className='flex flex-col items-center justify-center py-8 text-center'>
            <CheckCircle className='h-16 w-16 text-green-500 mb-4' />
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              You're on the list!
            </h3>
            <p className='text-gray-600 mb-4'>
              Thanks for joining our waitlist. We'll notify you when AskLaw LM
              is ready.
            </p>
            <Button onClick={handleClose} className='w-full'>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-lg max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <div className='flex items-center justify-between'>
            <DialogTitle className='text-xl font-semibold'>
              Join the Waitlist
            </DialogTitle>
            <Button
              variant='ghost'
              size='sm'
              onClick={handleClose}
              disabled={isSubmitting}
              className='h-8 w-8 p-0'
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
          <p className='text-sm text-gray-600 mt-2'>
            Get early access to AskLaw LM and be among the first to
            revolutionize your legal research workflow.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
          <div className='space-y-2'>
            <Label htmlFor='fullName'>Full Name *</Label>
            <Input
              id='fullName'
              type='text'
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder='Enter your full name'
              disabled={isSubmitting}
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email Address *</Label>
            <Input
              id='email'
              type='email'
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder='Enter your email address'
              disabled={isSubmitting}
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='organization'>Organization</Label>
            <Input
              id='organization'
              type='text'
              value={formData.organization}
              onChange={(e) =>
                handleInputChange('organization', e.target.value)
              }
              placeholder='Law firm, company, or organization'
              disabled={isSubmitting}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='practiceArea'>Practice Area</Label>
            <Input
              id='practiceArea'
              type='text'
              value={formData.practiceArea}
              onChange={(e) =>
                handleInputChange('practiceArea', e.target.value)
              }
              placeholder='e.g., Corporate Law, Litigation, IP, etc.'
              disabled={isSubmitting}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='useCase'>How do you plan to use AskLaw LM?</Label>
            <Textarea
              id='useCase'
              value={formData.useCase}
              onChange={(e) => handleInputChange('useCase', e.target.value)}
              placeholder="Tell us about your legal research needs and how you'd like to use our AI assistant..."
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          <div className='flex items-start space-x-2'>
            <Checkbox
              id='agreeToUpdates'
              checked={formData.agreeToUpdates}
              onCheckedChange={(checked) =>
                handleInputChange('agreeToUpdates', !!checked)
              }
              disabled={isSubmitting}
            />
            <Label htmlFor='agreeToUpdates' className='text-sm leading-tight'>
              I agree to receive email updates about AskLaw LM's development and
              launch notifications.
            </Label>
          </div>

          <div className='flex gap-3 pt-4'>
            <Button
              type='button'
              variant='outline'
              onClick={handleClose}
              disabled={isSubmitting}
              className='flex-1'
            >
              Cancel
            </Button>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='flex-1 bg-[#0a0a0a] hover:bg-[#2a2a2a]'
            >
              {isSubmitting ? (
                <>
                  <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                  Joining...
                </>
              ) : (
                'Join Waitlist'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
