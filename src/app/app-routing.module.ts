import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {path: '', redirectTo: '/thoughts', pathMatch: 'full'},
  {path: 'thoughts', component: ListThoughtComponent},
  {path: 'thoughts/delete/:id', component: DeleteThoughtComponent},
  {path: 'thoughts/edit/:id', component: EditThoughtComponent},
  {path: 'novoPensamento', component: CreateThoughtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
