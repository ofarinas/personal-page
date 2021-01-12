import {Action, createReducer, on} from "@ngrx/store";
import {addProject} from "../actions/actions";
import {projectReducer} from "./project.reducer";
import {initialState, State} from "./state";

export const mainReducer = createReducer(
  initialState,
  on(
    addProject,
    projectReducer()
  ),
);

export function reducer(state: State | undefined, action: Action): State {
  return mainReducer(state, action);
}
