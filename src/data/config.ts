export const site = {
  name: 'The Earthing Institute',
  tagline: 'Advancing the Science of Grounding',
  description: 'The Earthing Institute is a nonprofit research and education organization advancing the science of how physical connection with the Earth influences human health.',
  url: 'https://earthinginstitute.net',
  coursesUrl: 'https://earthinginstitute.net/courses',
  email: 'info@earthinginstitute.net',
  taxId: '501(c)(3)',
} as const;

export const nav = [
  { label: 'Mission', href: '/mission' },
  { label: 'Research', href: '/research' },
  {
    label: 'Earthing Basics',
    href: '/basics',
    children: [
      { label: 'What is Earthing?', href: '/basics' },
      { label: 'Getting Started', href: '/basics/getting-started' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
  {
    label: 'Stories',
    href: '/stories',
    children: [
      { label: 'Success Stories', href: '/stories' },
      { label: 'Health Professionals', href: '/stories/health-professionals' },
      { label: 'Testimonials A-Z', href: '/stories/conditions' },
    ],
  },
  { label: 'Media', href: '/media' },
  { label: 'Courses', href: '/courses' },
  { label: 'Blog', href: '/blog' },
] as const;

export const impactStats = [
  { value: '35+', label: 'Peer-Reviewed Studies', icon: 'microscope' },
  { value: '5.9M+', label: 'Movie Views', icon: 'play' },
  { value: '20+', label: 'Years of Research', icon: 'calendar' },
  { value: '17', label: 'Languages', icon: 'globe' },
] as const;

export const donationTiers = [
  {
    name: 'Supporter',
    amount: 55,
    stripeLink: '#', // Replace with actual Stripe Payment Link
    benefits: [
      'Digital Brief Guide to Earthing',
      'Newsletter subscription',
      'Thank you letter from the Institute',
    ],
  },
  {
    name: 'Advocate',
    amount: 99,
    stripeLink: '#',
    benefits: [
      'Signed copy of the Earthing book',
      'All Supporter benefits',
    ],
  },
  {
    name: 'Bronze',
    amount: 250,
    stripeLink: '#',
    featured: false,
    benefits: [
      'Website recognition',
      'Virtual Meet & Greet with Dr. Chevalier & Clint Ober',
      'Universal Mat Kit',
      'All Advocate benefits',
    ],
  },
  {
    name: 'Silver',
    amount: 1_000,
    stripeLink: '#',
    featured: true,
    benefits: [
      'Website recognition',
      'Earthing Essentials Kit',
      'All Bronze benefits',
    ],
  },
  {
    name: 'Gold',
    amount: 5_000,
    stripeLink: '#',
    benefits: [
      'Whitepaper sponsorship',
      '2x Earthing Essentials Kits',
      'All Silver benefits',
    ],
  },
  {
    name: 'Platinum',
    amount: 20_000,
    stripeLink: '#',
    benefits: [
      'Pilot or full study sponsorship',
      'Recognition in publication',
      'All Gold benefits',
    ],
  },
] as const;

export const impactExamples = [
  { amount: 55, impact: 'Distributes research summaries to 100 health professionals' },
  { amount: 99, impact: 'Funds translation of one research paper for international reach' },
  { amount: 250, impact: 'Supplies lab materials for a pilot grounding study' },
  { amount: 1_000, impact: 'Sponsors a peer-reviewed research publication' },
  { amount: 5_000, impact: 'Funds a complete pilot study on grounding and health' },
  { amount: 20_000, impact: 'Sponsors a full randomized controlled trial' },
] as const;

export const featuredTestimonials = [
  {
    quote: 'After just two weeks of grounding, my chronic back pain of 15 years diminished significantly. I sleep better and wake up with more energy than I have had in decades.',
    name: 'Sarah M.',
    condition: 'Chronic Pain',
  },
  {
    quote: 'As a cardiologist, I was skeptical. But the research on blood viscosity and grounding is compelling. I now recommend earthing to my patients as part of their heart health protocol.',
    name: 'Dr. Richard K.',
    condition: 'Health Professional',
  },
  {
    quote: 'My daughter has autism and struggled terribly with sleep. Grounding has given her — and our whole family — peaceful nights for the first time in years.',
    name: 'Jennifer T.',
    condition: 'Sleep & Autism',
  },
  {
    quote: 'I am a competitive cyclist. Earthing has noticeably reduced my recovery time between training sessions and races. The science behind it is real.',
    name: 'Marco D.',
    condition: 'Sports Recovery',
  },
  {
    quote: 'Grounding helped stabilize my blood sugar levels alongside my regular treatment. My endocrinologist was surprised at the improvement in my A1C numbers.',
    name: 'Patricia L.',
    condition: 'Diabetes Management',
  },
] as const;

export const featuredStudies = [
  {
    title: 'Earthing effects on mitochondrial function: ATP production and ROS generation',
    year: 2025,
    journal: 'Journal of Inflammation Research',
    finding: 'Grounding significantly increased ATP production while reducing reactive oxygen species, suggesting a direct mechanism for the anti-inflammatory effects of earthing.',
    topic: 'Inflammation',
  },
  {
    title: 'Randomized, double-blind, placebo-controlled study on sleep quality with Earthing mat',
    year: 2025,
    journal: 'Sleep Medicine',
    finding: 'Participants using grounded mats showed statistically significant improvements in sleep onset latency, sleep duration, and subjective sleep quality.',
    topic: 'Sleep',
  },
  {
    title: 'Grounding as Universal Anti-Inflammatory Remedy',
    year: 2022,
    journal: 'Biomedical Journal',
    finding: 'Comprehensive review confirming earthing reduces inflammation markers across multiple studies, positioning grounding as a foundational health practice.',
    topic: 'Inflammation',
  },
] as const;
