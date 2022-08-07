import { Component, Input, OnInit } from '@angular/core';
import { PokemonHome } from 'src/app/core/models/PokemonHome';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemon: PokemonHome;
  @Input() id: number
  
  imageUrl: string

  constructor() {}

  ngOnInit(): void {
    this.id = this.id + 1
    // this.imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (this.id) + ".png"
  }
}
