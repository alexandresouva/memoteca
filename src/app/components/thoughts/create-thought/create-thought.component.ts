import { Component } from '@angular/core';
import { ThoughtModel } from 'src/app/enums/thoughtModel';
import { Thought } from 'src/app/interfaces/Ithought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  thought: Thought = { content: '', author: '', model: ThoughtModel.Modelo1 };

  constructor (
    private service: ThoughtService,
    private router: Router
  ) {}
  
  createThought() {
    this.service.create(this.thought).subscribe();
    this.returnToHome();
  }

  returnToHome() {
    this.router.navigate(['/']);
  }
}
