import {Action, createReducer, on} from "@ngrx/store";
import {addProjectActionBackend, addProjectActionFrontend} from "../actions/actions";
import {projectReducer} from "./project.reducer";
import {initialState, State} from "./state";

export const mainReducer = createReducer(
  initialState,
  on(
    addProjectActionFrontend,
    projectReducer()
  ),
);

export function reducer(state: State | undefined, action: Action): State {
  return mainReducer(state, action);
}
