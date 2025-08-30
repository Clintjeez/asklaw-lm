import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import {
  Shield,
  Lock,
  Eye,
  Server,
  FileCheck,
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Zap,
  Clock,
} from 'lucide-react';

const Security = () => {
  return (
    <div className='min-h-screen bg-[#fbfbf9]'>
      <Header />

      <main className='pt-16'>
        {/* Hero Section - Minimalist & Bold */}
        <section className='py-32 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <h1 className='text-5xl md:text-7xl font-bold text-[#0a0a0a] tracking-tight'>
                  Security
                </h1>
                <div className='w-24 h-1 bg-[#0a0a0a] mx-auto'></div>
              </div>

              <p className='text-xl md:text-2xl text-[#6b6b6b] font-light max-w-3xl mx-auto leading-relaxed'>
                Enterprise-grade security designed for legal professionals.
                Protect your clients' confidential information with bank-level
                encryption and compliance.
              </p>

              <div className='pt-8'>
                <Button
                  size='lg'
                  className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-12 py-4 text-lg font-medium'
                >
                  Security Overview
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-4'>
                Built for legal professionals
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Comprehensive security measures that meet the highest standards
                for attorney-client privilege and legal industry compliance.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* End-to-End Encryption */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Lock className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  End-to-End Encryption
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  AES-256 encryption protects your data in transit and at rest,
                  ensuring complete confidentiality of client communications.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    AES-256 encryption
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Zero-knowledge architecture
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    TLS 1.3 in transit
                  </li>
                </ul>
              </div>

              {/* Data Privacy */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Eye className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Attorney-Client Privilege
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Designed to maintain and protect attorney-client privilege
                  with strict data isolation and access controls.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Privilege protection
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Data isolation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Confidentiality controls
                  </li>
                </ul>
              </div>

              {/* Infrastructure Security */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Server className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Secure Infrastructure
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Enterprise-grade cloud infrastructure with redundant security
                  layers and 99.9% uptime guarantee.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    SOC 2 Type II certified
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Multi-zone redundancy
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    24/7 monitoring
                  </li>
                </ul>
              </div>

              {/* Access Controls */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Identity & Access Management
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Granular access controls with multi-factor authentication and
                  role-based permissions for your team.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Multi-factor authentication
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Role-based permissions
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    SSO integration
                  </li>
                </ul>
              </div>

              {/* Audit & Compliance */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <FileCheck className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Audit Trails
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Comprehensive logging and audit trails for all system
                  activity, ensuring transparency and regulatory compliance.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Complete activity logs
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Tamper-proof records
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Compliance reporting
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Shield className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Data Protection
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Advanced threat protection, backup systems, and disaster
                  recovery to safeguard your critical legal data.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Automated backups
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Disaster recovery
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Threat detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className='py-20 bg-slate-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-4'>
                Industry compliance standards
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Meet and exceed regulatory requirements with comprehensive
                compliance coverage.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='text-center p-6 bg-white rounded-lg shadow-sm'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Award className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-[#0a0a0a] mb-2'>
                  SOC 2 Type II
                </h3>
                <p className='text-sm text-[#6b6b6b]'>
                  Audited security controls and operational effectiveness
                </p>
              </div>

              <div className='text-center p-6 bg-white rounded-lg shadow-sm'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Globe className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-[#0a0a0a] mb-2'>
                  GDPR Compliant
                </h3>
                <p className='text-sm text-[#6b6b6b]'>
                  European data protection and privacy regulation compliance
                </p>
              </div>

              <div className='text-center p-6 bg-white rounded-lg shadow-sm'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-[#0a0a0a] mb-2'>
                  HIPAA Ready
                </h3>
                <p className='text-sm text-[#6b6b6b]'>
                  Healthcare information privacy and security standards
                </p>
              </div>

              <div className='text-center p-6 bg-white rounded-lg shadow-sm'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <FileCheck className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-[#0a0a0a] mb-2'>
                  ABA Standards
                </h3>
                <p className='text-sm text-[#6b6b6b]'>
                  American Bar Association technology guidelines compliance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Metrics Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-4'>
                Trusted by legal professionals
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Our security measures have earned the trust of law firms
                worldwide.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  99.9% Uptime
                </h3>
                <p className='text-[#6b6b6b]'>
                  Enterprise-grade reliability with guaranteed service
                  availability.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  Zero Breaches
                </h3>
                <p className='text-[#6b6b6b]'>
                  Perfect security track record with no data breaches since
                  inception.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  10,000+ Users
                </h3>
                <p className='text-[#6b6b6b]'>
                  Trusted by legal professionals across 50+ countries worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-slate-50'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-6'>
              Ready to secure your practice?
            </h2>
            <p className='text-lg text-[#6b6b6b] mb-8 max-w-2xl mx-auto'>
              Experience enterprise-grade security designed specifically for
              legal professionals and their clients.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
              >
                Get Security Assessment
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-8 py-3'
              >
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Security;
