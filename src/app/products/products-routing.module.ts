import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicPageComponent,
  },
  {
    path: 'numbers',
    component: NumberPageComponent,
  },
  {
    path: 'uncommons',
    component: UncommonPageComponent,
  },
  {
    path: 'custom',
    component: CustomPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
