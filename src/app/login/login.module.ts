import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginContainerComponent, LoginCardComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
