import { Component, OnInit } from '@angular/core';
import { Thought } from 'src/app/interfaces/Ithought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {
  thoughtsList: Thought[] = [];
  currentPage = 1;
  hasNewThoughts = true;
  showOnlyFavorites = false;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.listThoughts();
  }

  loadMoreThoughts() {
    if (this.hasNewThoughts) {
      this.service.list(++this.currentPage, this.filter, this.showOnlyFavorites).subscribe(thoughts => {
        this.thoughtsList.push(...thoughts);

        if (!thoughts.length) {
          this.hasNewThoughts = false;
        }
      });
    }
  }

  // Filter thoughts
  filter = '';
  searchThoughts() {
    this.resetConfigs();
    this.service.list(this.currentPage, this.filter, this.showOnlyFavorites).subscribe(
      (thoughtsSearched) => this.thoughtsList = thoughtsSearched
    );
  }

  // List 
  resetConfigs() {
    this.currentPage = 1;
    this.hasNewThoughts = true;
  }

  listThoughts() {
    this.resetConfigs();
    this.showOnlyFavorites = false;

    this.service.list(this.currentPage, this.filter, this.showOnlyFavorites).subscribe((thoughtsList) => this.thoughtsList = thoughtsList);
  }

  listFavoritesThoughts() {
    this.resetConfigs();
    this.showOnlyFavorites = true;

    this.service.list(this.currentPage, this.filter, this.showOnlyFavorites).subscribe(
      (favoriteThoughts) => {
        this.thoughtsList = favoriteThoughts;
      });    
  }

  onFavoriteEmitter(isFavorite: boolean) {
    if (!isFavorite && this.showOnlyFavorites) {
      this.listFavoritesThoughts();
    }
  }
}
