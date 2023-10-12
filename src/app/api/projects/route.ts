/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

import { db } from '@/firebase'

export interface ProjectDB {
  id: string
  es: string
  en: string
  pt: string
  img: string
  url: string
  name: string
  github: string
  technologies: string[]
}

const getProjects = async () => {
  try {
    console.log('Obteniendo proyectos...')
    const q = query(collection(db, 'projects'))

    const projects: ProjectDB[] = []
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      const project = {
        id: doc.id,
        es: doc.data().es,
        en: doc.data().en,
        pt: doc.data().pt,
        img: doc.data().img,
        url: doc.data().url,
        name: doc.data().name,
        github: doc.data().github,
        technologies: doc.data().technologies,
      }

      projects.push(project)
    })

    console.log('Proyectos obtenidos')

    return projects
  } catch (error) {
    console.error(`Error getting documents: ${error}`)
  }
}

export async function GET() {
  try {
    const projects = await getProjects()

    return Response.json(projects)
  } catch (error) {
    console.error(error)

    return Response.json({ message: 'Error en la petición', error: error }, { status: 500 })
  }
}
