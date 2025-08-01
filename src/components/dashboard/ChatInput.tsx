import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Send,
  Paperclip,
  Mic,
  MessageCircle,
  Search,
  PenTool,
} from 'lucide-react';

type ChatMode = 'ask' | 'research' | 'draft';

interface ChatInputProps {
  onSendMessage: (message: string, mode: ChatMode) => void;
  disabled?: boolean;
  placeholder?: string;
}

const ChatInput = ({
  onSendMessage,
  disabled = false,
  placeholder = 'Ask me anything about law...',
}: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const [activeMode, setActiveMode] = useState<ChatMode>('ask');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim(), activeMode);
      setMessage('');
    }
  };

  const getModeConfig = (mode: ChatMode) => {
    switch (mode) {
      case 'ask':
        return {
          icon: MessageCircle,
          label: 'Ask',
          placeholder: 'Ask me anything about law...',
          description: 'Get answers to legal questions',
        };
      case 'research':
        return {
          icon: Search,
          label: 'Research',
          placeholder: 'Research legal topics, cases, or statutes...',
          description: 'Deep legal research and analysis',
        };
      case 'draft':
        return {
          icon: PenTool,
          label: 'Draft',
          placeholder: 'Draft contracts, letters, or legal documents...',
          description: 'Create and draft legal documents',
        };
    }
  };

  const currentPlaceholder = getModeConfig(activeMode).placeholder;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className='w-full max-w-4xl mx-auto space-y-4'>
      {/* Mode Toggle Buttons */}
      <div className='flex justify-center'>
        <div className='inline-flex bg-gray-100 rounded-lg p-1'>
          {(['ask', 'research', 'draft'] as ChatMode[]).map((mode) => {
            const config = getModeConfig(mode);
            const Icon = config.icon;
            const isActive = activeMode === mode;

            return (
              <button
                key={mode}
                type='button'
                onClick={() => setActiveMode(mode)}
                disabled={disabled}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className='h-4 w-4' />
                {config.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mode Description */}
      <div className='text-center'>
        <p className='text-sm text-gray-500'>
          {getModeConfig(activeMode).description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className='relative'>
        <div className='relative bg-white border border-gray-200 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500'>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={currentPlaceholder}
            disabled={disabled}
            className='w-full min-h-[60px] max-h-[200px] p-4 pr-32 border-0 resize-none rounded-2xl focus:ring-0 focus:outline-none placeholder:text-gray-400'
            rows={1}
          />

          {/* Action Buttons */}
          <div className='absolute bottom-3 right-3 flex items-center gap-2'>
            <Button
              type='button'
              variant='ghost'
              size='sm'
              className='h-8 w-8 p-0 text-gray-400 hover:text-gray-600'
              disabled={disabled}
            >
              <Paperclip className='h-4 w-4' />
            </Button>

            <Button
              type='button'
              variant='ghost'
              size='sm'
              className='h-8 w-8 p-0 text-gray-400 hover:text-gray-600'
              disabled={disabled}
            >
              <Mic className='h-4 w-4' />
            </Button>

            <Button
              type='submit'
              size='sm'
              disabled={disabled || !message.trim()}
              className='h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300'
            >
              <Send className='h-4 w-4' />
            </Button>
          </div>
        </div>

        {/* Helper Text */}
        <div className='flex items-center justify-between mt-2 px-2'>
          <span className='text-xs text-gray-400'>
            Press Enter to send, Shift+Enter for new line
          </span>
          <span className='text-xs text-gray-400'>{message.length}/2000</span>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
