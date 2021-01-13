import {Component, OnInit} from '@angular/core';
import {ProjectCreatorComponent} from "../modal/project-creator/project-creator.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {State} from "../reducers/state";
import {loadProjectAction} from "../actions/actions";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  panelOpenState = false;

  constructor(public dialog: MatDialog, public store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(loadProjectAction())
  }

  openModal() {
    const dialogRef = this.dialog.open(ProjectCreatorComponent);
  }
}
