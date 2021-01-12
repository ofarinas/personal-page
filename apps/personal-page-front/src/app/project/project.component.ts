import {Component, OnInit} from '@angular/core';
import {ProjectCreatorComponent} from "../modal/project-creator/project-creator.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  panelOpenState = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openModal() {
    const dialogRef = this.dialog.open(ProjectCreatorComponent);
  }
}
