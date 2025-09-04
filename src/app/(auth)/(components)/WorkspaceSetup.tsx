'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, X } from 'lucide-react';

interface WorkspaceData {
  jurisdictions: string[];
  legalServices: string[];
  documentTypes: string[];
}

interface WorkspaceSetupProps {
  onNext: (data: WorkspaceData) => void;
  onBack: () => void;
  onSkip: () => void;
  initialData?: WorkspaceData;
}

const JURISDICTIONS = [
  { id: 'nigeria', name: 'Nigeria', flag: '🇳🇬' },
  { id: 'us', name: 'United States', flag: '🇺🇸' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { id: 'uae', name: 'United Arab Emirates', flag: '🇦🇪' },
  { id: 'international', name: 'International', flag: '🌍' }
];

const SUGGESTED_LEGAL_SERVICES = [
  'Corporate Law',
  'Litigation',
  'Real Estate Law',
  'Family Law',
  'Criminal Defense',
  'Employment Law',
  'Intellectual Property',
  'Tax Law',
  'Estate Planning',
  'Immigration Law',
  'Contract Law',
  'International Law'
];

const SUGGESTED_DOCUMENT_TYPES = [
  'Contracts & Agreements',
  'Legal Briefs',
  'Court Filings',
  'Corporate Documents',
  'Real Estate Documents',
  'Employment Documents',
  'Patent Applications',
  'Tax Documents',
  'Litigation Documents',
  'Legal Memoranda',
  'Client Correspondence',
  'Settlement Agreements'
];

const WorkspaceSetup: React.FC<WorkspaceSetupProps> = ({ 
  onNext, 
  onBack, 
  onSkip, 
  initialData 
}) => {
  const [formData, setFormData] = useState<WorkspaceData>({
    jurisdictions: initialData?.jurisdictions || [],
    legalServices: initialData?.legalServices || [],
    documentTypes: initialData?.documentTypes || [],
  });

  const [legalServiceInput, setLegalServiceInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [documentTypeInput, setDocumentTypeInput] = useState('');
  const [showDocSuggestions, setShowDocSuggestions] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const docInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
      if (docInputRef.current && !docInputRef.current.contains(event.target as Node)) {
        setShowDocSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckboxChange = (
    category: keyof WorkspaceData,
    value: string,
    checked: boolean
  ) => {
    setFormData(prev => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter(item => item !== value)
    }));
  };

  const handleJurisdictionToggle = (jurisdictionId: string) => {
    setFormData(prev => ({
      ...prev,
      jurisdictions: prev.jurisdictions.includes(jurisdictionId)
        ? prev.jurisdictions.filter(id => id !== jurisdictionId)
        : [...prev.jurisdictions, jurisdictionId]
    }));
  };

  const addLegalService = (service: string) => {
    if (service.trim() && !formData.legalServices.includes(service.trim())) {
      setFormData(prev => ({
        ...prev,
        legalServices: [...prev.legalServices, service.trim()]
      }));
    }
    setLegalServiceInput('');
    setShowSuggestions(false);
  };

  const removeLegalService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      legalServices: prev.legalServices.filter(s => s !== service)
    }));
  };

  const handleLegalServiceInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && legalServiceInput.trim()) {
      e.preventDefault();
      addLegalService(legalServiceInput);
    }
  };

  const filteredSuggestions = SUGGESTED_LEGAL_SERVICES.filter(
    service => 
      service.toLowerCase().includes(legalServiceInput.toLowerCase()) &&
      !formData.legalServices.includes(service)
  );

  const addDocumentType = (docType: string) => {
    if (docType.trim() && !formData.documentTypes.includes(docType.trim())) {
      setFormData(prev => ({
        ...prev,
        documentTypes: [...prev.documentTypes, docType.trim()]
      }));
    }
    setDocumentTypeInput('');
    setShowDocSuggestions(false);
  };

  const removeDocumentType = (docType: string) => {
    setFormData(prev => ({
      ...prev,
      documentTypes: prev.documentTypes.filter(d => d !== docType)
    }));
  };

  const handleDocumentTypeInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && documentTypeInput.trim()) {
      e.preventDefault();
      addDocumentType(documentTypeInput);
    }
  };

  const filteredDocSuggestions = SUGGESTED_DOCUMENT_TYPES.filter(
    docType => 
      docType.toLowerCase().includes(documentTypeInput.toLowerCase()) &&
      !formData.documentTypes.includes(docType)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const LegalServicesTagInput = () => (
    <Card className="border border-gray-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-[18px] font-medium text-[#0a0a0a]">
          Areas of Legal Practice
        </CardTitle>
        <CardDescription className="text-[14px] text-gray-600">
          Choose your practice areas or add custom ones
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Selected Tags */}
        {formData.legalServices.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.legalServices.map((service) => (
              <Badge
                key={service}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1 bg-[#0a0a0a] text-white hover:bg-[#2a2a2a]"
              >
                {service}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeLegalService(service)}
                  className="h-auto p-0 w-4 h-4 ml-1 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}

        {/* Input with suggestions */}
        <div className="relative" ref={inputRef}>
          <Input
            value={legalServiceInput}
            onChange={(e) => {
              setLegalServiceInput(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={handleLegalServiceInputKeyDown}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Type to search or add new practice area..."
            className="h-10 text-[14px] border-[#0a0a0a]"
          />
          
          {/* Suggestions dropdown */}
          {showSuggestions && (legalServiceInput || filteredSuggestions.length > 0) && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {filteredSuggestions.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => addLegalService(service)}
                  className="w-full px-3 py-2 text-left text-[14px] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                >
                  {service}
                </button>
              ))}
              {legalServiceInput.trim() && 
               !SUGGESTED_LEGAL_SERVICES.some(s => s.toLowerCase() === legalServiceInput.toLowerCase()) &&
               !formData.legalServices.includes(legalServiceInput.trim()) && (
                <button
                  type="button"
                  onClick={() => addLegalService(legalServiceInput)}
                  className="w-full px-3 py-2 text-left text-[14px] font-medium text-[#83a17d] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none border-t"
                >
                  Add "{legalServiceInput}"
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick add suggested services */}
        <div className="space-y-2">
          <p className="text-[13px] text-gray-500">Quick add:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_LEGAL_SERVICES.filter(service => !formData.legalServices.includes(service))
              .slice(0, 6).map((service) => (
              <Button
                key={service}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addLegalService(service)}
                className="text-[12px] h-7 px-2 border-gray-300 hover:border-[#0a0a0a] hover:bg-[#0a0a0a]/5"
              >
                + {service}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const DocumentTypesTagInput = () => (
    <Card className="border border-gray-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-[18px] font-medium text-[#0a0a0a]">
          Document Types
        </CardTitle>
        <CardDescription className="text-[14px] text-gray-600">
          Choose document types you work with or add custom ones
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Selected Tags */}
        {formData.documentTypes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.documentTypes.map((docType) => (
              <Badge
                key={docType}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1 bg-[#0a0a0a] text-white hover:bg-[#2a2a2a]"
              >
                {docType}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeDocumentType(docType)}
                  className="h-auto p-0 w-4 h-4 ml-1 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}

        {/* Input with suggestions */}
        <div className="relative" ref={docInputRef}>
          <Input
            value={documentTypeInput}
            onChange={(e) => {
              setDocumentTypeInput(e.target.value);
              setShowDocSuggestions(true);
            }}
            onKeyDown={handleDocumentTypeInputKeyDown}
            onFocus={() => setShowDocSuggestions(true)}
            placeholder="Type to search or add new document type..."
            className="h-10 text-[14px] border-[#0a0a0a]"
          />
          
          {/* Suggestions dropdown */}
          {showDocSuggestions && (documentTypeInput || filteredDocSuggestions.length > 0) && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {filteredDocSuggestions.map((docType) => (
                <button
                  key={docType}
                  type="button"
                  onClick={() => addDocumentType(docType)}
                  className="w-full px-3 py-2 text-left text-[14px] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                >
                  {docType}
                </button>
              ))}
              {documentTypeInput.trim() && 
               !SUGGESTED_DOCUMENT_TYPES.some(d => d.toLowerCase() === documentTypeInput.toLowerCase()) &&
               !formData.documentTypes.includes(documentTypeInput.trim()) && (
                <button
                  type="button"
                  onClick={() => addDocumentType(documentTypeInput)}
                  className="w-full px-3 py-2 text-left text-[14px] font-medium text-[#83a17d] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none border-t"
                >
                  Add "{documentTypeInput}"
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick add suggested document types */}
        <div className="space-y-2">
          <p className="text-[13px] text-gray-500">Quick add:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_DOCUMENT_TYPES.filter(docType => !formData.documentTypes.includes(docType))
              .slice(0, 6).map((docType) => (
              <Button
                key={docType}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addDocumentType(docType)}
                className="text-[12px] h-7 px-2 border-gray-300 hover:border-[#0a0a0a] hover:bg-[#0a0a0a]/5"
              >
                + {docType}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const JurisdictionsSection = () => (
    <Card className="border border-gray-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-[18px] font-medium text-[#0a0a0a]">
          Jurisdictions
        </CardTitle>
        <CardDescription className="text-[14px] text-gray-600">
          Select all jurisdictions where you practice law
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {JURISDICTIONS.map((jurisdiction) => (
            <Button
              key={jurisdiction.id}
              type="button"
              variant={formData.jurisdictions.includes(jurisdiction.id) ? "default" : "outline"}
              onClick={() => handleJurisdictionToggle(jurisdiction.id)}
              size="sm"
              className={`h-auto px-3 py-2 flex items-center gap-2 transition-all ${
                formData.jurisdictions.includes(jurisdiction.id)
                  ? 'bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white border-[#0a0a0a]'
                  : 'border-gray-300 hover:border-[#0a0a0a] hover:bg-[#0a0a0a]/10'
              }`}
            >
              <span className="text-lg">{jurisdiction.flag}</span>
              <span className="text-[13px] font-medium">{jurisdiction.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const MultiSelectSection = ({ 
    title, 
    description, 
    options, 
    category,
    maxHeight = '300px' 
  }: {
    title: string;
    description: string;
    options: string[];
    category: keyof WorkspaceData;
    maxHeight?: string;
  }) => (
    <Card className="border border-gray-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-[18px] font-medium text-[#0a0a0a]">
          {title}
        </CardTitle>
        <CardDescription className="text-[14px] text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className="grid grid-cols-2 gap-3 overflow-y-auto pr-2"
          style={{ maxHeight }}
        >
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${category}-${option}`}
                checked={formData[category].includes(option)}
                onCheckedChange={(checked) => 
                  handleCheckboxChange(category, option, checked as boolean)
                }
                className="data-[state=checked]:bg-[#83a17d] data-[state=checked]:border-[#83a17d]"
              />
              <label
                htmlFor={`${category}-${option}`}
                className="text-[14px] cursor-pointer hover:text-[#83a17d] transition-colors"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-none">
        <CardHeader className="px-0 pb-6">
          <CardTitle className="text-[24px] font-medium text-[#0a0a0a]">
            Workspace Configuration
          </CardTitle>
          <CardDescription className="text-[15px] text-gray-600">
            Help us understand your legal practice to provide you with relevant tools and resources.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-0 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Jurisdictions */}
            <JurisdictionsSection />

            {/* Legal Services */}
            <LegalServicesTagInput />

            {/* Document Types */}
            <DocumentTypesTagInput />

            {/* Action Buttons */}
            <div className="flex justify-between pt-6">
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onSkip}
                  className="text-[#83a17d] hover:text-[#6d8a67] hover:bg-[#83a17d]/10"
                >
                  Skip this step
                </Button>
              </div>
              
              <Button
                type="submit"
                className="bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 h-12"
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

export default WorkspaceSetup;
