import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SpellService } from 'src/app/services/spell-service.service';

import Spell from 'src/app/models/Spell';
import { MatDialog } from '@angular/material/dialog';
import { DialogueCreateComponent } from './dialogue-create/dialogue-create.component';

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.css']
})
export class SpellFormComponent implements OnInit{
@Input() newSpell: Spell = new Spell("",0,"","","","","","");
@Input() requestType: string = "post";
@ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;
//@Input() closeDialog: () => void = () => {};

spellForm?: FormGroup

constructor(private spellService: SpellService, private dialog: MatDialog){}

ngOnInit(){
  this.spellForm = new FormGroup({
    name: new FormControl(this.newSpell.name),
    level: new FormControl(this.newSpell.level),
    school: new FormControl(this.newSpell.school),
    castingTime: new FormControl(this.newSpell.castingTime),
    range: new FormControl(this.newSpell.range),
    components: new FormControl(this.newSpell.components),
    duration: new FormControl(this.newSpell.duration),
    description: new FormControl(this.newSpell.description),
    prepared: new FormControl(this.newSpell.prepared)
    })
  }

  onSubmitForm(){
      

    this.spellForm?.patchValue({
      name: this.spellForm.controls['name'].value,
      level: this.spellForm.controls['level'].value,
      school: this.spellForm.controls['school'].value,
      castingTime: this.spellForm.controls['castingTime'].value,
      range: this.spellForm.controls['range'].value,
      components: this.spellForm.controls['components'].value,
      duration: this.spellForm.controls['duration'].value,
      description: this.spellForm.controls['description'].value,
      prepared: this.spellForm.controls['prepared'].value,
    })

    this.newSpell = {id: this.newSpell.id, ...this.spellForm?.value}

    if (this.requestType == "post") {
      this.spellService.postSpell(this.newSpell);
    } else {
      this.spellService.updateSpell(this.newSpell.id, this.newSpell);
    }
  }

  openDialog() {
    if (this.requestType == "post") {
      this.dialog.open(DialogueCreateComponent);
    }
  }
}
