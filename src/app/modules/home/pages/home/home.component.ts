import { Component, OnInit } from '@angular/core';
import { PokemonHome } from 'src/app/core/models/PokemonHome';
import { pokemonList } from 'src/app/mock/pokemon_list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonHome[] = pokemonList;
  totalPokemon: number = 1154;
  nextUrl: string = '';
  previousUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
