export function projectReducer() {
  return (state, action) => {
    return <any>{
      projects: state.projects.concat(action.payload)
    }
  }
}

