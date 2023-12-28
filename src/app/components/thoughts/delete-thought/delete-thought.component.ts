import { Component, OnInit } from '@angular/core';
import { ThoughtModel } from 'src/app/enums/thoughtModel';
import { Thought } from 'src/app/interfaces/Ithought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {
  thought: Thought = {
    id: 1,
    content: '',
    author: '',
    model: ThoughtModel.Modelo1
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.service.searchById(Number(id)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  deleteThought() {
    if (this.thought.id) {
      this.service.delete(this.thought.id).subscribe(() => {
        alert('Excluído com sucesso.');
        this.returnToHome();
      });
    }
  }

  returnToHome() {
    this.router.navigate(['/']);
  }
}
