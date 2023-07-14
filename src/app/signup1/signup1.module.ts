import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Signup1RoutingModule } from './signup1-routing.module';

import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { ZComponent } from './z/z.component';


@NgModule({
  declarations: [
    XComponent,
    YComponent,
    ZComponent
  ],
  imports: [
    CommonModule,
    Signup1RoutingModule
  ]
})
export class Signup1Module { }
