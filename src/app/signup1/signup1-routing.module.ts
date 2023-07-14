import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { ZComponent } from './z/z.component';

const routes: Routes = [
  { path: 'x', component: XComponent },
  { path: 'y', component: YComponent },
  { path: 'z', component: ZComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Signup1RoutingModule { }
