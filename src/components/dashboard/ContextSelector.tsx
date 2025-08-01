import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, FileText, Globe, Database } from 'lucide-react';

interface ContextSource {
  id: string;
  name: string;
  type: 'file' | 'url' | 'database';
  size?: string;
  url?: string;
}

interface ContextSelectorProps {
  selectedContext: string;
  onContextChange: (context: string) => void;
  sources: ContextSource[];
  onRemoveSource: (id: string) => void;
}

const ContextSelector = ({
  selectedContext,
  onContextChange,
  sources,
  onRemoveSource,
}: ContextSelectorProps) => {
  const getSourceIcon = (type: ContextSource['type']) => {
    switch (type) {
      case 'file':
        return <FileText className="h-3 w-3" />;
      case 'url':
        return <Globe className="h-3 w-3" />;
      case 'database':
        return <Database className="h-3 w-3" />;
      default:
        return <FileText className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Context Selection */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700 min-w-fit">
          Context:
        </label>
        <Select value={selectedContext} onValueChange={onContextChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select context" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Knowledge</SelectItem>
            <SelectItem value="case-law">Case Law Database</SelectItem>
            <SelectItem value="statutes">Statutes & Regulations</SelectItem>
            <SelectItem value="contracts">Contract Templates</SelectItem>
            <SelectItem value="uploaded">Uploaded Sources</SelectItem>
            <SelectItem value="custom">Custom Knowledge Base</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Sources */}
      {sources.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Active Sources ({sources.length}):
          </label>
          <div className="flex flex-wrap gap-2">
            {sources.map((source) => (
              <Badge
                key={source.id}
                variant="secondary"
                className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200"
              >
                {getSourceIcon(source.type)}
                <span className="text-xs font-medium">
                  {source.name}
                  {source.size && ` (${source.size})`}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveSource(source.id)}
                  className="h-4 w-4 p-0 hover:bg-blue-100"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Context Description */}
      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
        {selectedContext === 'general' && (
          <p>Using general legal knowledge and training data. No specific sources attached.</p>
        )}
        {selectedContext === 'case-law' && (
          <p>Searching through comprehensive case law databases for relevant precedents.</p>
        )}
        {selectedContext === 'statutes' && (
          <p>Referencing current statutes, regulations, and legal codes.</p>
        )}
        {selectedContext === 'contracts' && (
          <p>Using contract templates and clause libraries for drafting assistance.</p>
        )}
        {selectedContext === 'uploaded' && (
          <p>Analyzing your uploaded documents and sources for contextual responses.</p>
        )}
        {selectedContext === 'custom' && (
          <p>Using your organization's custom knowledge base and proprietary resources.</p>
        )}
      </div>
    </div>
  );
};

export default ContextSelector;