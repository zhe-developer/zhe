import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CfcComponent } from './cfc/cfc.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { WaybillComponent } from './waybill/waybill.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Need2knowComponent } from './need2know/need_to_know.component';
import { TarrifcalculatorComponent } from './tarrifcalculator/tarrifcalculator.component';
import { QuoterequestComponent } from './quoterequest/request_quote.component';
import { WarehousequoteComponent } from './warehousequote/warehousequote.component';
import { ThreeplComponent } from './threepl/threepl.component';
import { SliderComponent } from './slider/slider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

export const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'ecommerce', component: EcommerceComponent },
    { path: 'services/3pl', component: ThreeplComponent },
    { path: 'services/cfc', component: CfcComponent },
    { path: 'login', component: LoginComponent },
    { path: 'support/quotation/warehousing', component: WarehousequoteComponent },
    { path: 'support/quotation/3pl', component: QuoterequestComponent },
    { path: 'support/quotation/cfc', component: ContactComponent },
    { path: 'customer-feedback', component: FeedbackComponent },
    { path: 'support/need-to-know', component: Need2knowComponent },
  { path: 'support/waybill-guide',      component: WaybillComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Zhe Website' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    EcommerceComponent,
    WaybillComponent,
    FeedbackComponent,
    Need2knowComponent,
    TarrifcalculatorComponent,
    QuoterequestComponent,
    WarehousequoteComponent,
    CfcComponent,
    FooterComponent,
    NavbarComponent,
    ToolbarComponent,
    ThreeplComponent,
    SliderComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
