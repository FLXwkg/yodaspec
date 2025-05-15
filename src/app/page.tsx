import CreateProjectDialog from '@/components/create-project-dialog'
import ProjectsList from '@/components/lists/project-list'
import Project from '@/db/models/project'
import { connect } from '@/lib/db'
import { IProject } from '@/types/interfaces'

export default async function Home (): Promise<React.ReactNode> {
  await connect()
  let projects = await Project.find({}).exec()

  const createProject = async (project: IProject): Promise<void> => {
    'use server'
    const newProject = new Project(project)
    await newProject.save()
    projects = await Project.find({}).exec()
  }
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <CreateProjectDialog createProject={createProject} />
        <ProjectsList projects={projects} />
      </main>
    </div>
  )
}
