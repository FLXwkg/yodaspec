'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from './ui/textarea'
import { useState } from 'react'

function CreateProjectDialog (): React.ReactNode {
  const [projectData, setProjectData] = useState({
    title: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('projectData :>> ', projectData)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Créer un projet</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Créer un projet</DialogTitle>
          <DialogDescription>
            Nommez votre projet et renseignez une description
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Nom
              </Label>
              <Input
                id='name'
                value={projectData.title}
                className='col-span-3'
                onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Description
              </Label>
              <Textarea
                id='username'
                value={projectData.description}
                onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit' className='cursor-pointer'>Créer le projet</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}

export default CreateProjectDialog
