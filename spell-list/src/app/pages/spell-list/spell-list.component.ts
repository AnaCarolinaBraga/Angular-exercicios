import { Component, OnInit } from '@angular/core';
import Spell from 'src/app/models/Spell';
import { SpellService } from 'src/app/services/spell-service.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit{

  spellList: Spell[] =[];
  
  constructor(private spellService: SpellService) {}

  ngOnInit(): void {
    this.spellList = this.spellService.getSpells();
  }
}
