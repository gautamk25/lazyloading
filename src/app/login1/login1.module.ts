import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login1RoutingModule } from './login1-routing.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';



@NgModule({
  declarations: [
    AComponent,
    BComponent,
    CComponent,
    DComponent,
  ],
  imports: [
    CommonModule,
    Login1RoutingModule
  ]
})
export class Login1Module { }
