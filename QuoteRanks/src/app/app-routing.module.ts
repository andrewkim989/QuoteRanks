import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: "", component: AllComponent},
  {path: "new", component: NewComponent},
  {path: "quotes/:id", component: ShowComponent},
  {path: "edit/:id", component: EditComponent},
  {path: "write/:id", component: AddComponent},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
