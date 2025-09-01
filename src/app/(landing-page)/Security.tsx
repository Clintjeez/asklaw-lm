import { Shield, Lock, Eye, CheckCircle, Award, Globe } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description:
        'All data is encrypted in transit and at rest using AES-256 encryption standards.',
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description:
        'Multi-layered security with continuous verification for every access request.',
    },
  ];

  const compliances = [
    {
      icon: Award,
      title: 'SOC 2 Type II',
      description:
        'Audited security controls for availability, confidentiality, and privacy.',
      status: 'Certified',
    },
    {
      icon: Globe,
      title: 'GDPR Compliant',
      description: 'Full compliance with European data protection regulations.',
      status: 'Compliant',
    },
    {
      icon: Shield,
      title: 'ISO 27001',
      description:
        'International standard for information security management systems.',
      status: 'Certified',
    },
    {
      icon: CheckCircle,
      title: 'HIPAA Ready',
      description:
        'Healthcare-grade security for sensitive legal and client information.',
      status: 'Ready',
    },
  ];

  return (
    <section
      className='py-20 px-6 sm:px-8 lg:px-12 bg-[#747373] relative'
      style={{
        backgroundImage: 'url("/tile_bg.svg")',
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0',
      }}
    >
      {/* Subtle overlay for better readability */}
      <div className='absolute inset-0 bg-[#0a0a0a]/80'></div>
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Two Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
          {/* Left Column - Heading */}
          <div className='lg:col-span-4'>
            <div className='lg:sticky lg:top-24'>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight'>
                Enterprise-Grade Security & Compliance
              </h2>
              <p className='text-lg text-gray-300 leading-relaxed mb-8'>
                Your legal data deserves the highest level of protection.
                AskLawLM implements bank-grade security measures and maintains
                compliance with industry standards to keep your sensitive
                information secure.
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className='lg:col-span-8 space-y-16'>
            {/* Security Features */}
            <div>
              <h3 className='text-2xl font-medium text-white mb-8'>
                Security Features
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {securityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className='bg-[#1a1a1a]/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#83a17d]/30 hover:shadow-lg hover:bg-[#1a1a1a] transition-all duration-300'
                    >
                      <div className='flex items-start gap-4'>
                        <div className='w-12 h-12 bg-gradient-to-br from-[#83a17d] to-[#bfceb4] rounded-xl flex items-center justify-center flex-shrink-0'>
                          <Icon className='h-6 w-6 text-white' />
                        </div>
                        <div>
                          <h4 className='text-lg font-medium text-white mb-2'>
                            {feature.title}
                          </h4>
                          <p className='text-gray-300 text-sm leading-relaxed'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compliance Certifications */}
            <div>
              <h3 className='text-2xl font-medium text-white mb-8'>
                Compliance & Certifications
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {compliances.map((compliance, index) => {
                  const Icon = compliance.icon;
                  return (
                    <div
                      key={index}
                      className='bg-[#1a1a1a]/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#83a17d]/30 hover:shadow-md hover:bg-[#1a1a1a] transition-all duration-300'
                    >
                      <div className='flex items-start gap-4'>
                        <div className='w-12 h-12 bg-[#83a17d]/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-[#83a17d]/30'>
                          <Icon className='h-6 w-6 text-green-600' />
                        </div>
                        <div className='flex-1'>
                          <div className='flex items-start justify-between mb-2'>
                            <h4 className='text-lg font-medium text-white'>
                              {compliance.title}
                            </h4>
                            <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2'>
                              <CheckCircle className='h-3 w-3 mr-1' />
                              {compliance.status}
                            </span>
                          </div>
                          <p className='text-gray-300 text-sm leading-relaxed'>
                            {compliance.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Security Promise */}
            <div className='bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 text-white border border-gray-700/50 shadow-xl'>
              <div className='flex flex-col lg:flex-row items-start gap-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-[#83a17d] to-[#bfceb4] rounded-2xl flex items-center justify-center flex-shrink-0'>
                  <Shield className='h-8 w-8 text-white' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-medium mb-4'>
                    Our Security Promise
                  </h3>
                  <p className='text-gray-300 leading-relaxed mb-6'>
                    We understand that legal professionals handle some of the
                    most sensitive information. That's why security isn't just a
                    feature for us—it's fundamental to everything we build.
                  </p>
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className='text-left '>
                      <div className='text-2xl font-light text-white mb-1'>
                        24/7
                      </div>
                      <p className='text-gray-400 text-sm'>
                        Security Monitoring
                      </p>
                    </div>
                    <div className='text-left'>
                      <div className='text-2xl font-light text-white mb-1'>
                        99.9%
                      </div>
                      <p className='text-gray-400 text-sm'>Uptime Guarantee</p>
                    </div>
                    <div className='text-left'>
                      <div className='text-2xl font-light text-white mb-1'>
                        &lt;24h
                      </div>
                      <p className='text-gray-400 text-sm'>Incident Response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
