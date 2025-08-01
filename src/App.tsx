
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Notebook from "./pages/Notebook";
import AskLawOps from "./pages/AskLawOps";
import AskLawIndex from "./pages/AskLawIndex";
import AskLawDraft from "./pages/AskLawDraft";
import AskLawTranslate from "./pages/AskLawTranslate";
import Security from "./pages/Security";
import Pricing from "./pages/Pricing";
import Enterprise from "./pages/Enterprise";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/ops" element={<AskLawOps />} />
      <Route path="/index" element={<AskLawIndex />} />
      <Route path="/draft" element={<AskLawDraft />} />
      <Route path="/translate" element={<AskLawTranslate />} />
      <Route path="/security" element={<Security />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute fallback={<Landing />}>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/notebook" 
        element={
          <ProtectedRoute fallback={<Landing />}>
            <Notebook />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/notebook/:id" 
        element={
          <ProtectedRoute fallback={<Landing />}>
            <Notebook />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFound />} />
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
