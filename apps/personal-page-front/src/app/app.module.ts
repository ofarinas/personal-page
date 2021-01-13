import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ProjectComponent} from './project/project.component';
import {ContactComponent} from './contact/contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ProjectCreatorComponent} from './modal/project-creator/project-creator.component';
import {ActionReducer, State, StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/main.reducer";
import {storeLogger} from "ngrx-store-logger";
import {environment} from "../environments/environment";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProjectEffect} from "./effect/project.effect";
import {EffectsModule} from "@ngrx/effects";

export function logger(reducer: ActionReducer<State<any>>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProjectComponent,
    ContactComponent,
    NavBarComponent,
    ProjectCreatorComponent
  ],
  imports: [
    StoreModule.forRoot(<any>{state: reducer}, {metaReducers}),
    EffectsModule.forRoot([ProjectEffect]),
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
