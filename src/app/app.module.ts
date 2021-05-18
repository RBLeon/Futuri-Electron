import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsidebarComponent } from './goodsidebar/goodsidebar.component';
import { TodolijstComponent } from './todolijst/todolijst.component';
import { BoodschappenComponent } from './boodschappen/boodschappen.component';
import { VervelingComponent } from './verveling/verveling.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AgendaComponent } from './agenda/agenda.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
