import {Component, Inject, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {addProjectActionBackend, removeProjectActionBackend} from "../../actions/actions";
import {Project} from "@personal-page/model";

import { ProjectComponent } from '../../project/project.component';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'personal-page-project-creator',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.css']
  
})
export class WarningModalComponent implements OnInit {
  projects$ = this.store.pipe(select((reducer: any) => reducer.state.projects));
  project: Project;

  constructor(public store: Store<{ State }>,  public dialogRef: MatDialogRef<ProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.project = <Project>{}
  }

  ngOnInit(): void {
  }

  removeProject():void {
    this.store.dispatch(removeProjectActionBackend({payload: this.data.project}))
    this.dialogRef.close();
  }
}
