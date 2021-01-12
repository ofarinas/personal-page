import {createAction, props} from '@ngrx/store';
import {Project} from "@personal-page/model";

export const loadProject = createAction('LoadProject')
export const addProject = createAction('AddProject', props<{ project: Project }>());
export const removeProject = createAction('AddProject', props<{ project: Project }>());
export const editProject = createAction('AddProject', props<{ project: Project }>());
