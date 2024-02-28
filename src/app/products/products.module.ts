import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncommonPageComponent,
    CustomPageComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
