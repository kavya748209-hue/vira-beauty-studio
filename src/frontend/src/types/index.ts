export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  avatar: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface CelebrityItem {
  id: string;
  name: string;
  event: string;
  description: string;
  image: string;
}

export interface Achievement {
  id: string;
  number: string;
  label: string;
  suffix: string;
}

export interface NavLink {
  label: string;
  href: string;
  section: string;
}
