import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Spell from 'src/app/models/Spell';
import { SpellService } from 'src/app/services/spell-service.service';
import { DialogueDeleteComponent } from './dialogue-delete/dialogue-delete.component';

@Component({
  selector: 'app-spell-name',
  templateUrl: './spell-name.component.html',
  styleUrls: ['./spell-name.component.css']
})
export class SpellNameComponent implements OnChanges{

  @Input() spell?: Spell
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  constructor(private spellService: SpellService, private dialog: MatDialog) {}

ngOnChanges(): void {
  console.log('Spell prepared status changed');
}

changeStatus(prepared: boolean): void {
  if(this.spell) {
    if(prepared){
      this.spell.prepared = true
    }
    else{
      this.spell.prepared = false
    }
  }
}

deleteItem() {
  if (this.spell) this.spellService.deleteSpell(this.spell.id);
}

openDialog() {
  if (this.dialogTemplate) {
    this.dialog.open(this.dialogTemplate);
  }
}

openDeleteDialog(){
  if (this.spell) {
    this.dialog.open(DialogueDeleteComponent, {
      data: { id: this.spell.id }
    });
  }
}

}
