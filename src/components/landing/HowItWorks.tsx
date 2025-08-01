import { Upload, Brain, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from './WaitlistModal';

const HowItWorks = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload Your Documents',
      description: 'Securely upload legal documents, contracts, case files, or any legal content you need to analyze or work with.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      number: '02',
      title: 'AI Analysis & Insights',
      description: 'Our advanced AI processes your documents, extracting key information, identifying patterns, and generating intelligent insights.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FileText,
      number: '03',
      title: 'Research & Draft',
      description: 'Ask questions, conduct research, and draft new documents with AI assistance tailored to your specific legal needs.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Download,
      number: '04',
      title: 'Export & Collaborate',
      description: 'Export your work, share insights with your team, and integrate findings into your existing legal workflow.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-[#0a0a0a] mb-4">
            How AskLawLM Works
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto mb-8">
            Transform your legal workflow in four simple steps with our AI-powered platform.
          </p>
          <Button
            onClick={() => setIsWaitlistModalOpen(true)}
            variant="outline"
            className="border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-100"
          >
            See It In Action
          </Button>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-2rem)] w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0" />
                )}
                
                <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0a0a0a] text-white text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-medium text-[#0a0a0a] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-light text-[#0a0a0a] mb-4">
            Ready to revolutionize your legal practice?
          </h3>
          <p className="text-[#6b6b6b] mb-6 max-w-2xl mx-auto">
            Join thousands of legal professionals who are already using AI to streamline their workflow and deliver better results for their clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsWaitlistModalOpen(true)}
              size="lg"
              className="bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-4"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-8 py-4"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </section>
  );
};

export default HowItWorks;