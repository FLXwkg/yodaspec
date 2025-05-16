import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

function ProjectCardSkeleton (): React.ReactNode {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>
          <Skeleton className='h-6 w-[200px]' />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-6 w-[200px]' />
      </CardContent>
    </Card>
  )
}

function ProjectListSkeleton ({ count = 4 }: Readonly<{ count?: number }>): React.ReactNode {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Projets</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {
          Array.from({ length: count }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))
        }
      </div>
    </div>

  )
}

export default ProjectListSkeleton
