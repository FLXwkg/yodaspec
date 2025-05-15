import { IProject } from '@/types/interfaces'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

function ProjectCard ({
  project
}: Readonly<{
  project: IProject }>): React.ReactNode {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-500'>{project.description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectsList ({
  projects
}: Readonly<{
  projects: IProject[] }>): React.ReactNode {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Projets</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsList
