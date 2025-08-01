import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ContextSelector from './ContextSelector';
import SourceUploader from './SourceUploader';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ContextSource {
  id: string;
  name: string;
  type: 'file' | 'url' | 'database';
  size?: string;
  url?: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedContext, setSelectedContext] = useState('general');
  const [sources, setSources] = useState<ContextSource[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleSendMessage = async (content: string, mode: 'ask' | 'research' | 'draft') => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API call with context and mode information - replace with actual LLM integration
    setTimeout(() => {
      let botResponse = "I'm AskLawLM, your AI legal assistant. ";
      
      // Mode-specific responses
      switch (mode) {
        case 'ask':
          botResponse += "I'll provide a direct answer to your legal question. ";
          break;
        case 'research':
          botResponse += "I'll conduct comprehensive legal research for you. ";
          break;
        case 'draft':
          botResponse += "I'll help you draft the legal document you need. ";
          break;
      }
      
      if (selectedContext !== 'general') {
        botResponse += `I'm using ${selectedContext.replace('-', ' ')} context. `;
      }
      
      if (sources.length > 0) {
        botResponse += `I have access to ${sources.length} additional source${sources.length > 1 ? 's' : ''}: ${sources.map(s => s.name).join(', ')}. `;
      }
      
      botResponse += "How can I assist you with your legal question?";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleFileUpload = async (files: File[]) => {
    setIsUploading(true);
    
    // Simulate file upload - replace with actual upload logic
    setTimeout(() => {
      const newSources: ContextSource[] = files.map(file => ({
        id: `file-${Date.now()}-${Math.random()}`,
        name: file.name,
        type: 'file',
        size: `${(file.size / 1024 / 1024).toFixed(1)}MB`,
      }));
      
      setSources(prev => [...prev, ...newSources]);
      setIsUploading(false);
    }, 2000);
  };

  const handleUrlAdd = async (url: string, name: string) => {
    setIsUploading(true);
    
    // Simulate URL processing - replace with actual URL fetch logic
    setTimeout(() => {
      const newSource: ContextSource = {
        id: `url-${Date.now()}`,
        name,
        type: 'url',
        url,
      };
      
      setSources(prev => [...prev, newSource]);
      setIsUploading(false);
    }, 1500);
  };

  const handleRemoveSource = (id: string) => {
    setSources(prev => prev.filter(source => source.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Context Controls */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Knowledge Context</h3>
          <SourceUploader
            onFileUpload={handleFileUpload}
            onUrlAdd={handleUrlAdd}
            isUploading={isUploading}
          />
        </div>
        
        <ContextSelector
          selectedContext={selectedContext}
          onContextChange={setSelectedContext}
          sources={sources}
          onRemoveSource={handleRemoveSource}
        />
      </div>

      {/* Chat Messages */}
      {messages.length > 0 && (
        <div className="mb-6 space-y-4 max-h-96 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'bot' && (
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <span className={`text-xs mt-1 block ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
              
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback className="bg-gray-600 text-white">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Chat Input */}
      <ChatInput
        onSendMessage={handleSendMessage}
        disabled={isLoading}
        placeholder="Ask me anything about law..."
      />
    </div>
  );
};

export default ChatInterface;