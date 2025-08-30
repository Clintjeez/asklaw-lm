import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import PublicOnlyRoute from '@/components/auth/PublicOnlyRoute';
import Landing from './pages/landingPage/Landing';
import Dashboard from './pages/dashboard';
import Notebook from './pages/dashboard/pages/Notebook';
import AskLawOps from './pages/oldPages/AskLawOps';
import AskLawIndex from './pages/oldPages/AskLawIndex';
import AskLawDraft from './pages/oldPages/AskLawDraft';
import AskLawTranslate from './pages/oldPages/AskLawTranslate';
import Security from './pages/oldPages/Security';
import Pricing from './pages/oldPages/Pricing';
import Enterprise from './pages/oldPages/Enterprise';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AuthCallback from './pages/auth/callback';

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
      <Route path='/auth/login' element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
      <Route path='/signup' element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />
      <Route path='/auth/signup' element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />
      <Route path='/auth/callback' element={<AuthCallback />} />
      <Route path='/ops' element={<AskLawOps />} />
      <Route path='/index' element={<AskLawIndex />} />
      <Route path='/draft' element={<AskLawDraft />} />
      <Route path='/translate' element={<AskLawTranslate />} />
      <Route path='/security' element={<Security />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/enterprise' element={<Enterprise />} />
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute fallback={<Landing />}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path='/notebook'
        element={
          <ProtectedRoute fallback={<Landing />}>
            <Notebook />
          </ProtectedRoute>
        }
      />
      <Route
        path='/notebook/:id'
        element={
          <ProtectedRoute fallback={<Landing />}>
            <Notebook />
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
