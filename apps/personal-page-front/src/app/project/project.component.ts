import {Component, OnInit} from '@angular/core';
import {ProjectCreatorComponent} from "../modal/project-creator/project-creator.component";
import {MatDialog} from "@angular/material/dialog";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers/state";
import {loadProjectAction, removeProjectActionBackend, updateProjectAction} from "../actions/actions";
import {Observable} from "rxjs";
import {Project} from "@personal-page/model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  panelOpenState = false;
  project$: Observable<Project[]>

  constructor(public dialog: MatDialog, public store: Store<State>) {
    this.project$ = this.store.pipe(select((reducer: any) => reducer.state.projects))
  }

  ngOnInit() {
    this.store.dispatch(loadProjectAction())
  }

  openModal() {
    const dialogRef = this.dialog.open(ProjectCreatorComponent);
  }

  updateProject(project: Project) {
    this.store.dispatch(updateProjectAction({payload: project}));
  }

  removeProject(project: Project) {
    this.store.dispatch(removeProjectActionBackend({payload: project}))
  }
}
