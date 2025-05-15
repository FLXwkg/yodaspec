import mongoose, { Schema } from 'mongoose'

interface IProject {
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

const Project = mongoose.model<IProject>('Project', ProjectSchema)

export default Project
