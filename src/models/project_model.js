import mongoose, { Schema } from 'mongoose';



const ProjectSchema = new Schema({
  imageURL: String,
  githubURL: String,
  renderURL: String,
  tags: String,
  name: String,
  description: String
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;