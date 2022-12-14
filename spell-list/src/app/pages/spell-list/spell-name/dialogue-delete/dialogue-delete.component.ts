import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpellService } from 'src/app/services/spell-service.service';

@Component({
  selector: 'app-dialogue-delete',
  templateUrl: './dialogue-delete.component.html',
  styleUrls: ['./dialogue-delete.component.css']
})
export class DialogueDeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public id: number, private spellService: SpellService) {

  }

  deleteItem() {
    this.spellService.deleteSpell(this.id);
  }
}
