import { Component } from '@angular/core';

interface Thought {
  id: number,
  content: string,
  author: string,
  model: string
}

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  thought: Thought = { id: -1, content: '', author: '', model: '' };
  content = '';
}
