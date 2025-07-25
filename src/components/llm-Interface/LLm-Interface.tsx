import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useNotebooks } from '@/hooks/useNotebooks';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AuthModal from '@/components/auth/AuthModal';

const LLmInterface = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { createNotebook, isCreating } = useNotebooks();
  const { toast } = useToast();
  
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [selectedContext, setSelectedContext] = useState('All Sources');
  const [textareaValue, setTextareaValue] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleUrlAdd = () => {
    setShowUrlInput(true);
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      setSelectedUrls([...selectedUrls, urlInput.trim()]);
      setUrlInput('');
      setShowUrlInput(false);
    }
  };

  const handleUrlCancel = () => {
    setUrlInput('');
    setShowUrlInput(false);
  };

  const handleSubmit = async () => {
    if (!textareaValue.trim()) return;

    // Check if user is authenticated
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Create new notebook with the user's query as title
      const title = textareaValue.trim().length > 50 
        ? textareaValue.trim().substring(0, 50) + '...'
        : textareaValue.trim();

      createNotebook({
        title,
        description: 'Legal research notebook created from landing page query'
      }, {
        onSuccess: (notebook) => {
          console.log('Notebook created:', notebook);
          
          // Store the initial query in sessionStorage to pass to the notebook
          sessionStorage.setItem('initialQuery', textareaValue.trim());
          
          // Navigate to the new notebook
          navigate(`/notebook/${notebook.id}`);
          
          toast({
            title: "Research Started",
            description: "Created new notebook for your legal research query.",
          });
        },
        onError: (error) => {
          console.error('Failed to create notebook:', error);
          toast({
            title: "Error",
            description: "Failed to create notebook. Please try again.",
            variant: "destructive",
          });
        }
      });
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className='w-full max-w-2xl relative z-10'>
      {/* Glassmorphism Wrapper */}
      <div className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-1 shadow-2xl'>
        {/* LLM Input Interface */}
        <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden'>
          {/* Large Textarea Input */}
          <div className='p-4 sm:p-6'>
            <div className='relative'>
              <textarea
                placeholder='Ask me anything about legal research, case law analysis, document review, or complex legal questions...'
                className='w-full p-3 sm:p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent text-sm sm:text-base leading-relaxed'
                rows={6}
                style={{ minHeight: '180px' }}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSubmitting || isCreating}
              />
              {/* Context Dropdown */}
              <div className='absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex gap-1 sm:gap-2'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className='px-2 sm:px-3 py-1 sm:py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm flex items-center gap-1'>
                      <span className='hidden sm:inline'>Context: </span>{selectedContext}
                      <svg
                        className='w-3 h-3 sm:w-4 sm:h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='start' className='w-48'>
                    <DropdownMenuItem
                      onClick={() => setSelectedContext('Public Resources')}
                    >
                      Public Resources
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedContext('Uploaded Resources')}
                    >
                      Uploaded Resources
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedContext('All Sources')}
                    >
                      All Sources
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Upload Button */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className='p-2 sm:p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors'>
                      <svg
                        className='w-4 h-4 sm:w-5 sm:h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                        />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='start' className='w-48'>
                    <DropdownMenuItem asChild>
                      <label className='cursor-pointer'>
                        <input
                          type='file'
                          multiple
                          accept='.pdf,.doc,.docx,.txt'
                          onChange={handleFileSelect}
                          className='hidden'
                        />
                        Upload Files
                      </label>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleUrlAdd}>
                      Add URL
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Send Button */}
              <button 
                className={`absolute bottom-3 sm:bottom-4 right-3 sm:right-4 p-2 sm:p-3 rounded-lg transition-colors ${
                  textareaValue.trim() && !isSubmitting && !isCreating 
                    ? 'bg-[#0a0a0a] text-white hover:bg-[#2a2a2a]' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!textareaValue.trim() || isSubmitting || isCreating}
                onClick={handleSubmit}
              >
                <svg
                  className='w-4 h-4 sm:w-5 sm:h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
              </button>
            </div>
            {/* URL Input */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                showUrlInput
                  ? 'max-h-20 opacity-100 mt-3'
                  : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <div className='p-3 bg-gray-50 rounded-lg border border-gray-200 transform transition-transform duration-300 ease-in-out'>
                <div className='flex gap-2'>
                  <input
                    type='url'
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder='Enter URL (e.g., https://example.com)'
                    className='flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] text-sm'
                    autoFocus={showUrlInput}
                  />
                  <button
                    onClick={handleUrlSubmit}
                    className='px-3 py-2 bg-[#0a0a0a] text-white rounded hover:bg-[#2a2a2a] text-sm transition-colors duration-200'
                  >
                    Add
                  </button>
                  <button
                    onClick={handleUrlCancel}
                    className='px-3 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm transition-colors duration-200'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Selected Files and URLs Display */}
            {(selectedFiles.length > 0 || selectedUrls.length > 0) && (
              <div className='mt-3 flex flex-wrap gap-2'>
                {selectedFiles.map((file, index) => (
                  <div
                    key={`file-${index}`}
                    className='inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700'
                  >
                    <span>📄 {file.name}</span>
                    <button
                      onClick={() => {
                        const newFiles = selectedFiles.filter(
                          (_, i) => i !== index
                        );
                        setSelectedFiles(newFiles);
                      }}
                      className='text-gray-500 hover:text-red-500'
                    >
                      ×
                    </button>
                  </div>
                ))}
                {selectedUrls.map((url, index) => (
                  <div
                    key={`url-${index}`}
                    className='inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-700'
                  >
                    <span>🔗 {url}</span>
                    <button
                      onClick={() => {
                        const newUrls = selectedUrls.filter(
                          (_, i) => i !== index
                        );
                        setSelectedUrls(newUrls);
                      }}
                      className='text-blue-500 hover:text-red-500'
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className='flex flex-col sm:flex-row items-center justify-between mt-4 text-xs sm:text-sm text-[#6b6b6b] gap-2 sm:gap-0'>
              <span className='text-center sm:text-left'>AI-powered legal research assistant</span>
              <span className='text-center sm:text-right'>{isSubmitting || isCreating ? 'Creating notebook...' : 'Press Enter to send'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default LLmInterface;
