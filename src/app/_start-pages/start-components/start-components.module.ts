import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { HeaderComponent } from './body/header/header.component';
import { FooterComponent } from './body/footer/footer.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BodyComponent
  ]
})
export class StartComponentsModule { }
