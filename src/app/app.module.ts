import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsidebarComponent } from './goodsidebar/goodsidebar.component';
import { TodolijstComponent } from './todolijst/todolijst.component';
import { BoodschappenComponent } from './boodschappen/boodschappen.component';
import { VervelingComponent } from './verveling/verveling.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    GoodsidebarComponent,
    TodolijstComponent,
    BoodschappenComponent,
    VervelingComponent,
    WelcomeComponent,
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
