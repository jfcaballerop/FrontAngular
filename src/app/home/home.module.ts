import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MyteseoCardComponent } from './myteseo-card/myteseo-card.component';



@NgModule({
  declarations: [
    MyteseoCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    HomeRoutingModule
  ],
  exports: [
    MyteseoCardComponent
  ]
})
export class HomeModule { }
