import {createAction, props} from '@ngrx/store';
import {Project} from "@personal-page/model";

export const loadProjectAction = createAction('LoadProject')
export const addProjectActionBackend = createAction('AddProjectOnBackend', props<{ payload: Project }>());
export const addProjectActionFrontend = createAction('AddProjectOnFrontend', props<{ payload: Project[] }>());
export const removeProjectActionFrontEnd = createAction('RemoveProjectOnFrontEnd', props<{ payload: Project }>());
export const removeProjectActionBackend = createAction('RemoveProjectOnBackend', props<{ payload: Project }>());
export const updateProjectAction = createAction('UpdateProject', props<{ payload: Project }>());
export const editProject = createAction('AddProject', props<{ payload: Project }>());
