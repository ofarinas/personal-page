import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProjectService} from '../../services/project/project.service';
import {Project} from "@personal-page/model";

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {
  }

  @Get()
  getHello() {
    return this.projectService.getAll();
  }

  @Post()
  addProject(@Body() project: Project) {
  return this.projectService.add(project)
  }
}
