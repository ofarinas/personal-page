import {State} from "./main.reducer";

export function projectReducer() {
  return (state, {project}) => (<State>{projects: state.projects.concat([project])});
}
