import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FocusDirective } from './directives/focus.directive';
import { PreparedPipes } from './pipes/prepared.pipes';




@NgModule({
  declarations: [
    HeaderComponent,
    FocusDirective,
    PreparedPipes
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FocusDirective,
    PreparedPipes
  ]
})
export class SharedModule { }
