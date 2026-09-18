// src/components/portfolio/Data.tsx
import Work1 from '../../assets/project1.mp4'
import Work2 from '../../assets/project2.mp4'
import work3 from '../../assets/portfolio-website.png'
import Work4 from '../../assets/project4.png'
import Work5 from '../../assets/project5.png'

// Definisi tipe Project
export type Project = {
  id: number
  image: string
  title: string
  category: string
  url: string
  mediaType?: 'video' | 'image'
}


// Data project
export const projectsData: Project[] = [
  {
    id: 1,
    image: Work1,
    title: 'Project 1: GlucoGuide',
    category: 'website',
    url: 'https://github.com/reiirei/Gluco-Guide',
    mediaType: 'video',
  },
  {
    id: 2,
    image: Work2,
    title: 'Project 2: MechView',
    category: 'website',
    url: 'https://github.com/IqbalBagus-s/sistem-pencatatan-mesin',
    mediaType: 'video',
  },
  {
    id: 3,
    image: work3,
    title: 'Project 3: Portfolio Website',
    category: 'design',
    url: 'https://github.com/IqbalBagus-s/my-portfolio-v2',
    mediaType: 'image',
  },
  {
    id: 4,
    image: Work4,
    title: 'Project 4: Machine Learning Thesis',
    category: 'website',
    url: 'https://github.com/IqbalBagus-s/Hybrid-ResNet-50-SimAM-EMA-Attention-Module',
    mediaType: 'image',
  },
  {
    id: 5,
    image: Work5,
    title: 'Project 5: Clinify',
    category: 'website',
    url: 'https://github.com/IqbalBagus-s/clinify',
    mediaType: 'image',
  },
]

// Kunci kategori filter. Nilai di array ini TETAP berbahasa Inggris karena
// dipakai untuk mencocokkan project.category — bukan untuk ditampilkan.
// Label yang tampil ke pengguna diambil dari translation.json lewat
// t(`portfolio.filters.${key}`) di Works.tsx.
export const projectNavKeys: string[] = ['all', 'website', 'design']