import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  companyName: String,
  projectName: String,
  position: String,
  location: String,
  startDate: Date,
  endDate: Date,
  description: String,
  technologies: String,
  url: String
});
