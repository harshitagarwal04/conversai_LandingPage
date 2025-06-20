import { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CTABanner } from '@/components/CTABanner';
import UseCaseSection from '@/components/UseCaseSection';
import Header from '@/components/Header';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import industriesData from '@/data/industriesfinal.json';

export function generateStaticParams() {
  return [
    { slug: 'healthcare-and-wellness' },
    { slug: 'education' },
    { slug: 'home-services' },
    { slug: 'finance-and-legal' },
    { slug: 'real-estate-and-housing' },
    { slug: 'travel-and-hospitality' },
    { slug: 'retail' },
    { slug: 'technology' },
    { slug: 'fitness-and-wellness' },
    { slug: 'public-services' },
    { slug: 'automotive-and-transport' },
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industryData = getIndustryData(params.slug);

  return {
    metadataBase: new URL("http://localhost:3000/"),
    title: `${industryData.name} Voice Bot Solutions | ConversAI Labs`,
    description: `Transform your ${industryData.name.toLowerCase()} business with AI-powered voice bots. ${industryData.description} Get 24/7 automation, reduce costs, and enhance customer experience.`,
    keywords: [
      `${industryData.name.toLowerCase()} voice bots`,
      `AI automation ${industryData.name.toLowerCase()}`,
      'voice AI solutions',
      'customer service automation',
      'conversational AI',
      industryData.name.toLowerCase()
    ].join(', '),
    openGraph: {
      title: `${industryData.name} Voice Bot Solutions | ConversAI Labs`,
      description: `AI-powered voice automation solutions specifically designed for ${industryData.name.toLowerCase()} industry`,
      type: 'website',
      images: [
        {
          url: `/images/industries/${params.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${industryData.name} Voice Bot Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${industryData.name} Voice Bot Solutions`,
      description: `Transform your ${industryData.name.toLowerCase()} business with AI voice automation`,
      images: [`/images/industries/${params.slug}-twitter.jpg`],
    },
  };
}

const getIndustryData = (slug: string) => {
  const typedIndustriesData = industriesData as Record<
    string,
    {
      name: string;
      description: string;
      color: string;
      icon: string;
      features: string[];
      useCases: Array<{
        title: string;
        description: string;
        impact: string;
      }>;
      stats: Array<{
        number: string;
        label: string;
      }>;
      faqs: Array<{
        question: string;
        answer: string;
      }>;
    }
  >;

  const industry = typedIndustriesData[slug];

  if (!industry) {
    const fallbackName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      name: fallbackName,
      description: `Transform your ${fallbackName.toLowerCase()} business with AI-powered voice automation solutions.`,
      color: 'blue',
      features: [
        'Custom Solutions',
        'Industry Expertise',
        'Scalable Technology',
        '24/7 Support',
        'Analytics & Insights',
        'Integration Support',
      ],
      useCases: [
        {
          title: 'Customer Support',
          description: 'Automate customer inquiries and support requests',
          impact: '60% efficiency improvement',
        },
      ],
      stats: [
        { number: '70%', label: 'Cost Reduction' },
        { number: '24/7', label: 'Availability' },
        { number: '85%', label: 'Satisfaction' },
        { number: '50%', label: 'Time Savings' },
      ],
      faqs: [
        {
          question: `How can voice bots help ${fallbackName.toLowerCase()} businesses?`,
          answer: 'Voice bots can automate customer interactions, reduce operational costs, and provide 24/7 support tailored to your industry needs.',
        },
      ],
    };
  }

  return industry;
};

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industryData = getIndustryData(params.slug);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection
          industry={industryData.name}
          description={industryData.description}
          color={industryData.color}
        />
        <FeaturesSection
          industry={industryData.name}
          features={industryData.features}
          color={industryData.color}
        />
        <UseCaseSection
          industry={industryData.name}
          useCases={industryData.useCases}
        />
        <StatsSection
          industry={industryData.name}
          color={
            industryData.color as
              | 'blue'
              | 'purple'
              | 'green'
              | 'indigo'
              | 'orange'
              | 'default'
          }
          stats={industryData.stats.map((stat) => ({
            label: stat.label,
            value: stat.number
          }))}
        />
        <FAQSection industry={industryData.name} faqs={industryData.faqs} />
        <CTABanner industry={industryData.name} color={industryData.color} />
      </main>
    </>
  );
}
