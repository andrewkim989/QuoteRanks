import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthorsService } from "./authors.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    NewComponent,
    ShowComponent,
    AddComponent,
    NotfoundComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
