import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "products", component: ProductsComponent},
  {path: "contacts", component:InquiryComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
