import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import Spell from 'src/app/models/Spell';

@Component({
  selector: 'app-spell-name',
  templateUrl: './spell-name.component.html',
  styleUrls: ['./spell-name.component.css']
})
export class SpellNameComponent implements OnChanges{

@Input() spell: Spell = {
  name: "Spell name",
  level: 1,
  school: "Abjuration",
  castingTime: "1 action",
  range: "self",
  components: "V",
  duration: "Instantaneous",
  description: "Spell description",
  prepared: false
};

changeStatus(prepared: boolean): void {
  if(prepared){
    this.spell.prepared = true
  }
  else{
    this.spell.prepared = false
  }
}

ngOnChanges(): void {
  console.log('Spell prepared status changed');
}

}
