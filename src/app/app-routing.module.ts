import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeComponent} from './awesome/awesome.component';
import {AwesomeDetailComponent} from './awesome-detail/awesome-detail.component';

const routes: Routes = [{
  path: 'awesome',
  component: AwesomeComponent
} , {
  path: 'awesome',
  component: AwesomeDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
