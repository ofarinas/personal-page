import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {addProjectActionFrontend, removeProjectActionFrontEnd} from "../actions/actions";
import {Project} from "@personal-page/model";
import {Action} from "@ngrx/store";

@Injectable()
export class ProjectEffect {

  loadProject$ = createEffect(() => this.actions$.pipe(
    ofType('LoadProject'),
    mergeMap(() => this.http.get('http://localhost:3333/api/project')
      .pipe(
        map((projects: Project[]) => (addProjectActionFrontend({payload: projects}))),
        catchError(() => EMPTY)
      ))
    )
  );

  addProject$ = createEffect(() => this.actions$.pipe(
    ofType('AddProjectOnBackend'),
    tap(x => console.log('before project', x)),
    mergeMap((project: any) => this.http.post('http://localhost:3333/api/project/add', project.payload)
      .pipe(
        tap(x => console.log('project', x)),
        map((projects: Project[]) => (addProjectActionFrontend({payload: projects}))),
        catchError(() => EMPTY)
      ))
    )
  );
  removeProject$ = createEffect(() => this.actions$.pipe(
    ofType('RemoveProjectOnBackend'),
    mergeMap((project: any) => this.http.post('http://localhost:3333/api/project/remove', project.payload)
      .pipe(
        tap(x => console.log('project', x)),
        map((project: Project) => (removeProjectActionFrontEnd({payload: project}))),
        catchError(() => EMPTY)
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }

}
