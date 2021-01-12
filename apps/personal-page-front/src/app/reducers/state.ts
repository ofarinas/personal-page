import { Project } from '@personal-page/model';

export interface State {
  projects: Project[]
}

export const initialState: State = {
  projects: []
}
