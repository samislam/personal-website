export interface Package {
  id: string
  name: string
  description: string
  version: string
  downloads: string
  tags: string[]
  npmUrl: string
  githubUrl: string
}

export const packagesData: Package[] = [
  {
    id: 'package-1',
    name: 'react-smooth-animations',
    description:
      'A lightweight React library for smooth, performant animations with zero dependencies.',
    version: '2.1.0',
    downloads: '15.2k',
    tags: ['React', 'Animations', 'TypeScript'],
    npmUrl: 'https://npmjs.com/package/react-smooth-animations',
    githubUrl: 'https://github.com/username/react-smooth-animations',
  },
  {
    id: 'package-2',
    name: 'form-validator-js',
    description:
      'Simple yet powerful form validation library with custom rules and real-time validation.',
    version: '1.8.3',
    downloads: '8.7k',
    tags: ['JavaScript', 'Validation', 'Forms'],
    npmUrl: 'https://npmjs.com/package/form-validator-js',
    githubUrl: 'https://github.com/username/form-validator-js',
  },
]
