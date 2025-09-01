import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is AskLawLM and how does it work?',
      answer:
        'AskLawLM is an AI-powered legal workspace that helps lawyers and legal professionals streamline their research, document analysis, and case preparation. Our advanced language model is specifically trained on legal documents and can understand complex legal queries, analyze contracts, search case law, and generate legal documents with high accuracy.',
    },
    {
      question: 'Is my data secure and confidential?',
      answer:
        'Absolutely. We use bank-grade encryption and follow strict security protocols to protect your sensitive legal information. All data is encrypted in transit and at rest, and we comply with industry standards including SOC 2 and ISO 27001. Your client information and legal documents are never shared or used to train our models.',
    },
    {
      question: 'What types of legal documents can AskLawLM analyze?',
      answer:
        'AskLawLM can analyze a wide variety of legal documents including contracts, legal briefs, court filings, statutes, regulations, case law, patents, compliance documents, and more. Our AI can extract key information, identify potential issues, and provide intelligent insights across multiple practice areas.',
    },
    {
      question: 'How accurate is the AI-generated legal content?',
      answer:
        'Our AI achieves high accuracy rates, but we always recommend human review for all legal work. AskLawLM is designed to assist and accelerate your legal research and drafting, not replace professional legal judgment. All outputs should be reviewed by qualified legal professionals before use.',
    },
    {
      question: 'Can I integrate AskLawLM with my existing legal software?',
      answer:
        'Yes, we offer integrations with popular legal software including case management systems, document review platforms, and practice management tools. Our API allows for seamless integration into your existing workflow. Contact our team to discuss specific integration requirements.',
    },
    {
      question: 'What pricing plans do you offer?',
      answer:
        'We offer flexible pricing plans for solo practitioners, small firms, and enterprise clients. Our plans include different usage tiers, team collaboration features, and enterprise security options. Contact our sales team for detailed pricing information and to find the plan that best fits your needs.',
    },
    {
      question: 'Do you offer training and support?',
      answer:
        'Yes, we provide comprehensive onboarding, training materials, and ongoing support to help you get the most out of AskLawLM. Our support team includes legal technology experts who understand the unique needs of legal professionals.',
    },
    {
      question: 'How does the waitlist work?',
      answer:
        "By joining our waitlist, you'll be among the first to access AskLawLM when we launch new features or expand capacity. Waitlist members receive priority access, exclusive previews, and special launch pricing. We'll keep you updated on our progress and notify you as soon as access becomes available.",
    },
  ];

  return (
    <section className='py-20 px-6 sm:px-8 lg:px-12 '>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-left mb-16'>
          <h2 className='text-3xl sm:text-4xl font-light text-[#0a0a0a] mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-[#6b6b6b] max-w-2xl'>
            Get answers to common questions about AskLawLM and how it can
            transform your legal practice.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type='single' collapsible className='space-y-4'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='border border-gray-200 rounded-lg px-6 py-2 hover:border-gray-300 transition-colors'
            >
              <AccordionTrigger className='text-left font-medium text-[#0a0a0a] hover:no-underline py-4'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-[#6b6b6b] leading-relaxed pb-4'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
