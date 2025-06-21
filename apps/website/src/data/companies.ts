export interface Company {
  id: string
  name: string
  logo: string
  role?: string
  period?: string
}

export const companiesData: Company[] = [
  {
    id: 'company-1',
    name: 'Google',
    logo: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Senior Frontend Developer',
    period: '2023-2024',
  },
  {
    id: 'company-2',
    name: 'Microsoft',
    logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Full Stack Developer',
    period: '2022-2023',
  },
  {
    id: 'company-3',
    name: 'Meta',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'React Developer',
    period: '2021-2022',
  },
  {
    id: 'company-4',
    name: 'Netflix',
    logo: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'UI/UX Developer',
    period: '2020-2021',
  },
  {
    id: 'company-5',
    name: 'Spotify',
    logo: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Frontend Engineer',
    period: '2019-2020',
  },
  {
    id: 'company-6',
    name: 'Airbnb',
    logo: 'https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Web Developer',
    period: '2018-2019',
  },
  {
    id: 'company-7',
    name: 'Uber',
    logo: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Software Engineer',
    period: '2017-2018',
  },
  {
    id: 'company-8',
    name: 'Tesla',
    logo: 'https://images.pexels.com/photos/159866/books-book-pages-read-159866.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Frontend Developer',
    period: '2016-2017',
  },
]
