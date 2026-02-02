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
  theme: "premium" as const,
  hubSlug: "austin-home-services",
  serviceLocation: {
    lat: 30.2672,
    lng: -97.7431
  },
  serviceRadius: 25000,
  serviceAreas: [
    { name: "Downtown Austin", slug: "downtown" },
    { name: "East Austin", slug: "east-austin" },
    { name: "South Austin", slug: "south-austin" },
    { name: "North Austin", slug: "north-austin" },
    { name: "West Austin", slug: "west-austin" },
    { name: "Round Rock", slug: "round-rock" },
    { name: "Cedar Park", slug: "cedar-park" },
    { name: "Pflugerville", slug: "pflugerville" },
  ],
  brandName: "Austin Pro Services",
  licenseNumber: "AB-12345",
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
