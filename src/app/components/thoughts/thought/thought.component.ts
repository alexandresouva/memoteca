import { Component, Input, OnInit } from '@angular/core';
import { Thought } from 'src/app/interfaces/Ithought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {
  @Input() thought!: Thought;
  favoriteStatus = '';

  ngOnInit(): void {
    this.handleThoughtFavorite();
  }

  constructor(private service: ThoughtService) {}

  toggleThoughtSize() {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  handleThoughtFavorite() {
    this.favoriteStatus = this.thought.favorite ? 'ativo' : 'inativo';
  }

  updateFavoriteIcon() {
    this.service.changeFavoriteStatus(this.thought).subscribe(
      () => this.handleThoughtFavorite()
    );
  }
}
