import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
