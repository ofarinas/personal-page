import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {addProject} from "../../actions/actions";
import {Project} from "@personal-page/model";
import {State} from "../../reducers/state";

@Component({
  selector: 'personal-page-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css']
})
export class ProjectCreatorComponent implements OnInit {
  projects$ = this.store.pipe(select((reducer: any) => reducer.state.projects));

  constructor(public store: Store<{ State }>) {
  }

  ngOnInit(): void {

  }

  saveProject() {
    this.store.dispatch(addProject({project: <Project>{companyName: 'Hallo'}}))
  }
}
