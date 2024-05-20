import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { Router } from '@angular/router';
import { CharacterModel } from '../models/character.model';
import { InputService } from '../services/input.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  wasLoaded: boolean = false;
  characters: CharacterModel[] = [];
  page: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(
    private inputService: InputService,
    private rickAndMortyService: RickAndMortyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.inputService.showLoading();
    this.getCharacters(0, 10);
  }

  getCharacters(start: number, end: number) {
    this.rickAndMortyService.getCharacters(this.page)
      .subscribe((data: any) => {

        this.characters = data.results.slice(start, end);
        this.totalPages = data.info.pages;
        this.inputService.hideLoading();
        this.wasLoaded = true;
      });
  }

  loadPage(page: number) {
    this.inputService.showLoading();
    this.page = page;
    const startIndex = ((page - 1) % 2) * this.pageSize;

    this.getCharacters(startIndex, startIndex + this.pageSize);
  }


  getPageNumbers(): number[] {
    const currentPageIndex = this.page - 1;
    const totalPages = this.totalPages;
    const pagesToShow = 5;

    let startPage: number, endPage: number;

    if (totalPages <= pagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPageIndex <= 2) {
        startPage = 1;
        endPage = pagesToShow;
      } else if (currentPageIndex + 1 >= totalPages - 2) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPageIndex - 1;
        endPage = currentPageIndex + 3;
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  viewDescription(id: number) {
    this.router.navigate(['/characterDescription'], {
      queryParams: {
        character: id,
      }
    });
  }

}
