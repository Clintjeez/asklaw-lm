import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Upload, 
  Link, 
  Plus, 
  FileText, 
  AlertCircle,
  CheckCircle 
} from 'lucide-react';

interface SourceUploaderProps {
  onFileUpload: (files: File[]) => void;
  onUrlAdd: (url: string, name: string) => void;
  isUploading?: boolean;
}

const SourceUploader = ({ 
  onFileUpload, 
  onUrlAdd, 
  isUploading = false 
}: SourceUploaderProps) => {
  const [url, setUrl] = useState('');
  const [urlName, setUrlName] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      onFileUpload(fileArray);
      setIsOpen(false);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() && urlName.trim()) {
      onUrlAdd(url.trim(), urlName.trim());
      setUrl('');
      setUrlName('');
      setIsOpen(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const acceptedFormats = [
    '.pdf', '.doc', '.docx', '.txt', '.rtf',
    '.html', '.xml', '.json', '.csv'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          <Plus className="h-4 w-4" />
          Add Sources
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Knowledge Sources</DialogTitle>
          <DialogDescription>
            Upload documents or add URLs to enhance the AI's context and knowledge base.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="files" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="files" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Files
            </TabsTrigger>
            <TabsTrigger value="urls" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              URLs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="files" className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                dragActive
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Drag and drop files here, or click to browse
                </p>
                <Input
                  type="file"
                  multiple
                  accept={acceptedFormats.join(',')}
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                  id="file-upload"
                  disabled={isUploading}
                />
                <Label htmlFor="file-upload">
                  <Button 
                    variant="outline" 
                    className="cursor-pointer"
                    disabled={isUploading}
                    asChild
                  >
                    <span>
                      {isUploading ? 'Uploading...' : 'Choose Files'}
                    </span>
                  </Button>
                </Label>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Supported formats: {acceptedFormats.join(', ')}</span>
              </div>
              <div className="flex items-center gap-1">
                <AlertCircle className="h-3 w-3 text-yellow-500" />
                <span>Max file size: 10MB per file</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="urls" className="space-y-4">
            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url-input">Website URL</Label>
                <Input
                  id="url-input"
                  type="url"
                  placeholder="https://example.com/article"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name-input">Source Name</Label>
                <Input
                  id="name-input"
                  type="text"
                  placeholder="e.g., Legal Article, Case Study"
                  value={urlName}
                  onChange={(e) => setUrlName(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={!url.trim() || !urlName.trim() || isUploading}
              >
                {isUploading ? 'Adding...' : 'Add URL Source'}
              </Button>
            </form>

            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Supports: Articles, documentation, legal resources</span>
              </div>
              <div className="flex items-center gap-1">
                <AlertCircle className="h-3 w-3 text-yellow-500" />
                <span>URL content will be fetched and processed</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SourceUploader;