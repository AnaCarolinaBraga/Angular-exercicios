import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellNameComponent } from './spell-list/spell-name/spell-name.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SpellListComponent,
    SpellNameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SpellListComponent,
    SpellNameComponent
  ]
})
export class PagesModule { }
