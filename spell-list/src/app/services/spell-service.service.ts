import { Injectable } from '@angular/core';
import Spell from '../models/Spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  spellList: Spell[] = [{
    id: 1,
    name: "Absorb Elements",
    level: 1,
    school: "abjuration",
    castingTime: "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
    range: "Self",
    components: "S",
    duration: "1 round",
    description: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends. \n At Higher Levels. \n When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
    prepared: true
  },
  {
    id: 2,
    name: "Alarm",
    level: 1,
    school: "abjuration (ritual)",
    castingTime: "1 minute",
    range: "30 feet",
    components: "V, S, M (a tiny bell and a piece of fine silver wire)",
    duration: "8 hours",
    description: " You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. \n A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. \n An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
    prepared: false
  }];

  constructor() { }

  getSpells(): Spell[]{
    return this.spellList
  }

  postSpell(newSpell: Spell): void {
    this.spellList.push(newSpell)
  }

  updateSpell(id: number, updatedSpell: Spell) {
    const index = this.spellList.findIndex((spell)=> spell.id == id);
    this.spellList[index] = updatedSpell;
  }

  deleteSpell(id: number) {
    const index = this.spellList.findIndex((spell)=> spell.id == id);
    this.spellList.splice(index, 1);
  }
}
