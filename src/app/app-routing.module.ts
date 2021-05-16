import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { BoodschappenComponent } from './boodschappen/boodschappen.component';
import { TodolijstComponent } from './todolijst/todolijst.component';
import { VervelingComponent } from './verveling/verveling.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'todolijst',
    component: TodolijstComponent
  },
  {
    path: 'boodschappen',
    component: BoodschappenComponent
  },
  {
    path: 'verveling',
    component: VervelingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
