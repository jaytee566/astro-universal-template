// Site Configuration
// Change these values to update the entire site

export const site = {
  // Business Info
  businessName: 'Professional Home Services',
  tagline: 'Quality Service, Guaranteed',
  
  // Niche (changes per site - use neutral language)
  niche: 'Home Services',
  nicheLowercase: 'home services',
  
  // Location
  city: 'Austin',
  citySlug: 'austin',
  state: 'TX',
  stateFullName: 'Texas',
  
  // Contact
  phone: '(512) 555-0100',
  phoneLink: '5125550100',
  email: 'info@example.com',
  
  // Theme: 'urgent' | 'premium' | 'standard' | 'technical'
  theme: 'premium' as const,
  
  // Social Proof
  rating: '4.9',
  reviewCount: '500+',
  yearsInBusiness: '15+',
  
  // Business Hours
  hours: '24/7',
  
  // Service Area Radius
  serviceArea: '50 miles',
};

export type Theme = 'urgent' | 'premium' | 'standard' | 'technical';
export type SiteConfig = typeof site;
