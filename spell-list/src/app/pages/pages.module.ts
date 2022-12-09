import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellNameComponent } from './spell-list/spell-name/spell-name.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    SpellListComponent,
    SpellNameComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SpellListComponent,
    SpellNameComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
