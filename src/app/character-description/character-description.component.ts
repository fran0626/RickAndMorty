import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { CharacterModel } from '../models/character.model';
import { InputService } from '../services/input.service';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html'
})

export class CharacterDescriptionComponent implements OnInit{

  character!: CharacterModel;
  characterId: number = 0;


  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    private inputService: InputService,
  ){}

  ngOnInit(): void {
    this.inputService.showLoading();
    this.route.queryParams.subscribe(params => {
      this.characterId = +params['character'];
      this.getDescription(this.characterId);
    });

  }

  getDescription(id: number) {
    this.rickAndMortyService.getCharacterDescription(id).subscribe(
      data => {
        this.character = data;
        this.inputService.hideLoading();
      },
      error => {}
    );
  }

}
