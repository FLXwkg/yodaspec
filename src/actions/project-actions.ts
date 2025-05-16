import Project from '@/db/models/project'
import { connect, disconnect } from '@/lib/db'
import { IProject } from '@/types/interfaces'
import { revalidatePath } from 'next/cache'

const createProject = async (project: IProject): Promise<void> => {
  'use server'
  await connect()
  const newProject = new Project(project)
  await newProject.save()
  revalidatePath('/')
  await disconnect()
}

export { createProject }
