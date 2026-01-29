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
  niche: "Home Services",
  nicheLowercase: "home services",
  theme: "technical" as const,
  hubSlug: "austin-home-services",
};

// Services for Silo Architecture
export const services = [
  { slug: 'general-maintenance', name: 'General Maintenance' },
  { slug: 'appliance-repair', name: 'Appliance Repair' },
  { slug: 'emergency-services', name: 'Emergency Services' },
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
