import Work1 from '../../assets/project1.mp4'

// Definisi tipe Project
export type Project = {
  id: number
  image: string
  title: string
  category: string
  url: string
}

// Data project
export const projectsData: Project[] = [
  {
    id: 1,
    image: Work1,
    title: 'Project 1: GlucoGuide',
    category: 'website',
    url:'https://github.com/reiirei/Gluco-Guide',
  },
  {
    id: 2,
    image: Work1,
    title: 'Project 2',
    category: 'website',
    url:'',
  },
  {
    id: 3,
    image: Work1,
    title: 'Project 3',
    category: 'design',
    url:'',
  },
  {
    id: 4,
    image: Work1,
    title: 'Project 4',
    category: 'website',
    url:'',
  },
]

// Data navigasi kategori
export const projectNav = [
  { name: 'all' },
  { name: 'website' },
  { name: 'design' },
]
