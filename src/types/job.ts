export interface Job {
  id: string;
  title: string;
  company: string;
  companyType: string;
  location: string;
  zone: 'Cilegon' | 'Cikande' | 'Serang' | 'Merak' | 'Remote / Hybrid';
  type: 'Full-time' | 'Contract' | 'Remote';
  experienceLevel: string;
  salaryRange: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  techStack: string[];
  isVerified: boolean;
  applyUrl: string;
  contactEmail?: string;
}
