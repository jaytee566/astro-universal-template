// Site Configuration
// Change these values to update the entire site

export const site = {
  businessName: "Austin Water Damage Pros",
  tagline: "24/7 Emergency Response",
  phone: "(512) 555-0123",
  phoneLink: "5125550123",
  email: "info@austinwaterdamagepros.com",
  domain: "austinwaterdamagepros.com",
  city: "Austin",
  citySlug: "austin",
  state: "TX",
  stateAbbr: "TX",
  stateFullName: "Texas",
  serviceArea: "Greater Austin Area",
  rating: "4.9",
  reviewCount: "500+",
  yearsInBusiness: "15",
  niche: "Water Damage Restoration",
  nicheLowercase: "water damage restoration",
  theme: "urgent" as const,
  hubSlug: "austin-water-damage-restoration",
};

// Services for Silo Architecture
export const services = [
  { slug: 'water-extraction', name: 'Water Extraction' },
  { slug: 'flood-damage-repair', name: 'Flood Damage Repair' },
  { slug: 'emergency-water-removal', name: 'Emergency Water Removal' },
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
