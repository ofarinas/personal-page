import {Controller, Get, LoggerService} from '@nestjs/common';
import {ProjectService} from '../../services/project/project.service';

@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService) {
    }

    @Get()
    getHello() {
        this.projectService.add();
        return 'add';
    }
}
