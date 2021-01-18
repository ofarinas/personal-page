export function projectReducer() {
  return (state, action) => {
    return <any>{
      projects: state.projects.concat(action.payload)
    }
  }
}

export function removeProjectReducer() {
  return (state, action) => {
    return <any>{
      projects: state.projects.filter(project => JSON.stringify(project) !== JSON.stringify(action.payload))
    }
  }
}

function getProjects(state, action) {
  state.projects.forEach((project, index) => {
    if (project._id === action.payload._id) {
      state.projects[index] = action.payload;
    }
  });
  return state.projects
}

export function updateProjectReducer() {
  return (state, action) => {
    return <any>{
      projects: getProjects(state, action)
    }
  }
}



