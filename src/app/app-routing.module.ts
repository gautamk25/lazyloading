import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';


const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"newcomponent",component:NewcomponentComponent},

  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  // { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  // { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
 
  { path: 'login1', loadChildren: () => import('./login1/login1.module').then(m => m.Login1Module) },
  { path: 'signup1', loadChildren: () => import('./signup1/signup1.module').then(m => m.Signup1Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
