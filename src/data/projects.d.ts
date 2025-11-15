export interface Project {
  id: string;
  title: string;
  image: string | string[];
  description: string;
  link: string;
  serviceId: string;
}

export const allProjects: Project[];