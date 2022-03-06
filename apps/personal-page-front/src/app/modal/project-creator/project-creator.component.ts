import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addProjectActionBackend } from '../../actions/actions';
import { Project } from '@personal-page/model';

@Component({
  selector: 'personal-page-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css'],
})
export class ProjectCreatorComponent implements OnInit {
  projects$ = this.store.pipe(select((reducer: any) => reducer.state.projects));
  project: Project;

  constructor(public store: Store<{ State }>) {
    this.project = <Project>{};
  }

  ngOnInit(): void {}

  saveProject(): void {
    this.store.dispatch(addProjectActionBackend({ payload: this.project }));
  }
}
