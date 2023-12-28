import { Component, Input } from '@angular/core';
import { Thought } from 'src/app/interfaces/Ithought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  @Input() thought!: Thought;


  toggleThoughtSize() {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
