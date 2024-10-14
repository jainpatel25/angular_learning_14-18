import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe,AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  dogImages: string = '';
  pokemon: any[] = [];
  data: any[] = [];
  pokemonDetails: any[] = [];
  constructor(private http: HttpClient){
  }

  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any)=>{
      this.userList = result;
    })
  }

  getDogPics(){
    this.http.get("https://dog.ceo/api/breeds/image/random").subscribe((result: any)=>{
      this.dogImages = result.message;
    })

  }

  getPokemon() {
    // Fetch a list of 5 Pokémon
    this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100").subscribe((result: any) => {
      this.pokemon = result.results;
      this.data = []; // Initialize this.data as an empty array
      this.pokemonDetails = []; // Initialize this.pokemonDetails as an empty array
  
      for (let i = 0; i < this.pokemon.length; i++) {
        // Fetch details for each Pokémon
        this.data[i] = this.pokemon[i].name; // Assign the name to this.data[i]
      }
  
      console.log(this.data); // Log names array
    });
  }
  
}
