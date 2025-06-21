export interface ProjectPreview {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
}

export const projectsPreviewData: ProjectPreview[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image:
      'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Socket.io'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with interactive maps, forecasts, and location-based weather alerts.',
    image:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'D3.js', 'Weather API'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    featured: false,
  },
]
