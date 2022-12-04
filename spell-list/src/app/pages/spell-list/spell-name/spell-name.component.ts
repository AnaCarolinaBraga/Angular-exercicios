import { Component, Input } from '@angular/core';
import Spell from 'src/app/models/Spell';

@Component({
  selector: 'app-spell-name',
  templateUrl: './spell-name.component.html',
  styleUrls: ['./spell-name.component.css']
})
export class SpellNameComponent {

@Input() spell: Spell = {
  name: "Spell name",
  level: 1,
  school: "Abjuration",
  castingTime: "1 action",
  range: "self",
  components: "V",
  duration: "Instantaneous",
  description: "Spell description"

};

}
