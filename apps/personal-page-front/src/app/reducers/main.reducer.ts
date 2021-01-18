import {Action, createReducer, on} from "@ngrx/store";
import {addProjectActionFrontend, removeProjectActionFrontEnd} from "../actions/actions";
import {projectReducer, removeProjectReducer} from "./projectReducer";
import {initialState, State} from "./state";

export const mainReducer = createReducer(
  initialState,
  on(
    addProjectActionFrontend,
    removeProjectActionFrontEnd,
    projectReducer()
  ),
  on(
    removeProjectActionFrontEnd,
    removeProjectReducer()
  ),
  on(
    removeProjectActionFrontEnd,
    removeProjectReducer()
  ),
);

export function reducer(state: State | undefined, action: Action): State {
  return mainReducer(state, action);
}
