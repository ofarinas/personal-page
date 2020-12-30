import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ProjectService} from './services/project/project.service';
import {ProjectSchema} from './repositories/project-schema';
import {ProjectController} from './controllers/project/project.controller';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Project',
    schema: ProjectSchema
  }]),
    MongooseModule.forRoot('mongodb+srv://ofarinas12:ofarinas12@cluster0-6mfsx.mongodb.net/info-page?retryWrites=true&w=majority')],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService],
})
export class AppModule {
}
