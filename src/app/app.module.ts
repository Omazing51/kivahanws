import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainwsComponent } from './components/mainws/mainws.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MenucComponent } from './components/menuc/menuc.component';
import { MenubComponent } from './components/menub/menub.component';
//Rutas del sitio web
const appRoutes:Routes=[
  {path:'', component:MainComponent},
  {path:'mainws', component:MainwsComponent},
  {path:'menu', component:MenuComponent},
  {path:'location', component:LocationComponent},
  {path:'contact', component:ContactComponent},
  {path:'booking', component:BookingComponent},
  {path:'menuc', component:MenucComponent},
  {path:'menub', component:MenubComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    MainwsComponent,
    LocationComponent,
    ContactComponent,
    BookingComponent,
    MenuComponent,
    MenucComponent,
    MenubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgxExtendedPdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
