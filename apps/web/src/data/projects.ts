export interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  tags: string[]
  demoUrl: string
  githubUrl: string
  techStack: {
    frontend: string[]
    backend: string[]
    deployment: string[]
    tools: string[]
  }
  features: string[]
  stats: {
    stars: number
    forks: number
    commits: number
    contributors: number
  }
  status: string
  date: string
}

export const projectsData: Record<string, Project> = {
  'project-1': {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    longDescription: `This full-stack e-commerce platform represents a complete online shopping solution designed for scalability and user experience. The application features a modern, responsive design with intuitive navigation and smooth interactions.

The platform includes advanced features such as real-time inventory tracking, multi-payment gateway integration, automated email notifications, and comprehensive analytics dashboard. Built with performance in mind, it handles high traffic loads efficiently while maintaining excellent user experience.

Key technical achievements include implementing a microservices architecture, integrating multiple payment providers, creating a real-time notification system, and developing a comprehensive admin panel for business management.`,
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      deployment: ['Vercel', 'MongoDB Atlas', 'Cloudinary'],
      tools: ['Git', 'VS Code', 'Postman', 'Figma'],
    },
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Order tracking and history',
      'Admin dashboard for inventory management',
      'Real-time notifications',
      'Responsive design for all devices',
    ],
    stats: {
      stars: 127,
      forks: 34,
      commits: 256,
      contributors: 3,
    },
    status: 'Live',
    date: 'March 2024',
  },
  'project-2': {
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    longDescription: `This modern task management application revolutionizes team collaboration with its intuitive interface and powerful features. Built for teams of all sizes, it provides a comprehensive solution for project management, task tracking, and team communication.

The application features a beautiful, responsive design with smooth animations and micro-interactions that enhance user experience. Real-time collaboration capabilities ensure team members stay synchronized, while advanced filtering and sorting options help users focus on what matters most.

Technical highlights include implementing WebSocket connections for real-time updates, creating custom drag-and-drop components, and developing a sophisticated notification system that keeps teams informed without being overwhelming.`,
    image:
      'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Socket.io', 'Tailwind CSS'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    techStack: {
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Supabase', 'PostgreSQL', 'Socket.io'],
      deployment: ['Vercel', 'Supabase Cloud'],
      tools: ['Git', 'VS Code', 'Figma', 'Linear'],
    },
    features: [
      'Real-time collaborative editing',
      'Drag-and-drop task management',
      'Team workspace creation',
      'Advanced filtering and search',
      'File attachments and comments',
      'Time tracking and reporting',
      'Custom project templates',
      'Mobile-responsive design',
    ],
    stats: {
      stars: 89,
      forks: 21,
      commits: 187,
      contributors: 2,
    },
    status: 'Live',
    date: 'January 2024',
  },
  'project-3': {
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with interactive maps, forecasts, and location-based weather alerts.',
    longDescription: `This sophisticated weather dashboard provides comprehensive weather information through an elegant, data-rich interface. Designed for weather enthusiasts and professionals alike, it combines real-time weather data with historical trends and forecasting capabilities.

The application features interactive maps, detailed weather charts, and customizable alerts for severe weather conditions. Users can track multiple locations, view historical weather patterns, and receive personalized weather recommendations based on their preferences and location.

Key technical implementations include integrating multiple weather APIs for comprehensive data coverage, creating custom data visualization components, and implementing efficient data caching strategies for optimal performance.`,
    image:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Vue.js', 'D3.js', 'Weather API', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    techStack: {
      frontend: ['Vue.js 3', 'TypeScript', 'D3.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Weather APIs'],
      deployment: ['Netlify', 'Heroku'],
      tools: ['Git', 'VS Code', 'Postman', 'Adobe XD'],
    },
    features: [
      'Real-time weather data',
      'Interactive weather maps',
      'Extended 10-day forecasts',
      'Severe weather alerts',
      'Historical weather data',
      'Custom location tracking',
      'Data visualization charts',
      'Offline capability',
    ],
    stats: {
      stars: 156,
      forks: 42,
      commits: 298,
      contributors: 1,
    },
    status: 'Live',
    date: 'November 2023',
  },
}
