import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent },    
    { path: 'employees/:empId', component: EmployeeDetailsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productID', component: ProductDetailsComponent },
    { path: 'contact', component: ServicesComponent },
    { path: 'cart', component: CartComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
