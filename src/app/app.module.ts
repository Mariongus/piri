import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { WallsComponent } from './home/walls/walls.component';
import { Door1Component } from '@repositorio/doors/door1/door1.component';
import { Cuadro1Component } from '../repositorio/marcos/cuadro1/cuadro1.component';
import { Cuadro2Component } from '../repositorio/marcos/cuadro2/cuadro2.component';
import { Navbar1Component } from '../repositorio/navbars/navbar1/navbar1.component';
import { WallMessagesComponent } from './wall-messages/wall-messages.component';
import { WallNotificationsComponent } from './wall-notifications/wall-notifications.component';


const rutas : Routes = [
  {
    path : "",
    pathMatch : "full",
    redirectTo : "walls"
  },
  { 
    path : "walls",
    component : WallsComponent

  },
  {
    path : "messages",
    component : WallMessagesComponent
  },
  {
    path : "notifications",
    component : WallNotificationsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WallsComponent,
    Door1Component,
    Cuadro1Component,
    Cuadro2Component,
    Navbar1Component,
    WallMessagesComponent,
    WallNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
