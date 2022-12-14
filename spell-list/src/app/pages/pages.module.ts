import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellNameComponent } from './spell-list/spell-name/spell-name.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { SpellCreateComponent } from './spell-create/spell-create.component';
import { DialogueUpdateComponent } from './spell-list/spell-name/dialogue-update/dialogue-update.component';


@NgModule({
  declarations: [
    SpellListComponent,
    SpellNameComponent,
    PageNotFoundComponent,
    SpellCreateComponent,
    DialogueUpdateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    SpellListComponent,
    SpellNameComponent,
    PageNotFoundComponent,
    SpellCreateComponent
  ]
})
export class PagesModule { }
