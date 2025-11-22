export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
  university?: string;
}

export interface University {
  id: string;
  name: string;
  logo: string;
  country: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage?: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  };
  author?: {
    name: string;
    image?: any;
  };
  publishedAt: string;
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
  body: any;
  estimatedReadingTime?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
    type: string;
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
}
