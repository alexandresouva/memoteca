import { Component, OnInit } from '@angular/core';
import { Thought } from 'src/app/interfaces/Ithought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {
  thoughtList: Thought[] = [];
  currentPage = 1;
  hasNewThoughts = true;

  constructor (private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list(this.currentPage, this.filter).subscribe((thoughtList) => this.thoughtList = thoughtList);
  }

  loadMoreThoughts() {
    this.service.list(++this.currentPage, this.filter).subscribe(thoughts => {
      this.thoughtList.push(...thoughts);
      
      if (!thoughts.length) {
        this.hasNewThoughts = false;
      }
    });
  }
  
  // Filter thoughts
  filter = '';
  searchThoughts() {
    this.currentPage = 1;
    this.hasNewThoughts = true;
    this.service.list(this.currentPage, this.filter).subscribe((thoughtsSearched) => {
      this.thoughtList = thoughtsSearched;
    });
  }
}
