import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { baseURL } from './shared/baseurl';
import { RestangularConfigFactory } from './shared/restConfig';

import { RestangularModule, Restangular } from 'ngx-restangular';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    DishService,
    PromotionService,
    ProcessHttpmsgService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
