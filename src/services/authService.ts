
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const { signOut } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut();
      
      toast({
        title: "Signed out",
        description: "You have been successfully signed out."
      });
      
      // Redirect to auth page
      router.replace('/auth');
      
    } catch (error: any) {
      console.error('Logout error:', error);
      
      // Even if there's an error, redirect to auth page
      toast({
        title: "Signed out",
        description: "You have been signed out locally.",
        variant: "default"
      });
      
      router.replace('/auth');
    }
  };

  return { logout };
};
