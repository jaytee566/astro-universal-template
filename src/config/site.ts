// Site Configuration
// Change these values to update the entire site

export const site = {
  businessName: "Austin Pro Services",
  tagline: "Quality Service, Guaranteed",
  phone: "(512) 555-0123",
  phoneLink: "5125550123",
  email: "info@austinproservices.com",
  domain: "austinproservices.com",
  city: "Austin",
  citySlug: "austin",
  state: "TX",
  stateAbbr: "TX",
  stateFullName: "Texas",
  serviceArea: "Greater Austin Area",
  rating: "4.9",
  reviewCount: "500+",
  yearsInBusiness: "15",
  niche: "Luxury Pool & Outdoor Living",
  nicheLowercase: "luxury pool & outdoor living",
  theme: "premium" as const,
  hubSlug: "austin-luxury-pool-outdoor",
};

// Services for Silo Architecture (Luxury / Premium)
export const services = [
  { slug: 'custom-pool-design', name: 'Custom Pool Design' },
  { slug: 'pool-resurfacing', name: 'Pool Resurfacing' },
  { slug: 'outdoor-living-spaces', name: 'Outdoor Living Spaces' },
];

// Neighborhoods
export const neighborhoods = [
  { slug: 'downtown', name: 'Downtown' },
  { slug: 'north-austin', name: 'North Austin' },
  { slug: 'south-austin', name: 'South Austin' },
  { slug: 'east-austin', name: 'East Austin' },
  { slug: 'west-austin', name: 'West Austin' },
];

export type Theme = 'urgent' | 'premium' | 'standard' | 'technical';
export type SiteConfig = typeof site;
