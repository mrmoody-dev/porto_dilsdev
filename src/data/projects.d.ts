export interface Project {
  id: string;
  title: string;
  image: string | string[];
  description: string;
  details?: string;
  technologies?: string[];
  role?: string;
  challenges?: string;
  liveUrl?: string;
  githubUrl?: string;
  link?: string;
  serviceId: string;
}

export const allProjects: Project[];