import mongoose, { Schema } from 'mongoose';



const ExperienceSchema = new Schema({
  name: String,
  description: String,
});

const ExperienceModel = mongoose.model('Experience', ExperienceSchema);

export default ExperienceModel;