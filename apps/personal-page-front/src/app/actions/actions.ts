import {createAction, props} from '@ngrx/store';
import {Project} from "@personal-page/model";

export const loadProjectAction = createAction('LoadProject')
export const addProjectActionBackend = createAction('AddProjectOnBackend', props<{ payload: Project }>());
export const addProjectActionFrontend = createAction('AddProjectOnFrontend', props<{ payload: Project[] }>());
export const removeProject = createAction('AddProject', props<{ payload: Project }>());
export const editProject = createAction('AddProject', props<{ payload: Project }>());
