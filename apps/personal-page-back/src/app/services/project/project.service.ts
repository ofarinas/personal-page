import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Project} from "@personal-page/model";

@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') public projectRepository: Model<any>) {
  }

  async add(project?: Project): Promise<any> {
    console.log('before', project);
    const newProject = new this.projectRepository(project);
    const savedProject = await newProject.save();
    return await this.projectRepository.findById( savedProject.id).exec();
  }

  async edit(project?: Project): Promise<void> {
    const newProject = new this.projectRepository(project);
    newProject.update();
  }

  async delete(project?: Project): Promise<void> {
    const newProject = new this.projectRepository(project);
    newProject.delete();
  }

  async getAll(): Promise<any> {
    const projectResult = await this.projectRepository.find().exec();
    const projects = []
    Object.entries(projectResult).forEach(([key, value]) => {
      projects.push(value)
    });
    return projects
  }

}
