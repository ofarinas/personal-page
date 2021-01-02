import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Project} from "@personal-page/model";

@Injectable()
export class ProjectService {
    constructor(@InjectModel('Project') public projectRepository: Model<any>) {
    }

    async add(project?: Project): Promise<void> {
        const companyName = 'test66';
        const position = 'title66';
        const newProject = new this.projectRepository(<Project>{companyName, position});
        newProject.save();
    }
}
