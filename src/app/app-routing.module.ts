import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FocusComponent } from './focus/focus.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'focus', component: FocusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
