import { Component, OnInit } from '@angular/core';
import { ThoughtModel } from 'src/app/enums/thoughtModel';
import { Thought } from 'src/app/interfaces/Ithought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
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
    this.service.searchById(Number(id)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  editThought() {
    this.service.edit(this.thought).subscribe(() => {
      alert('Editado com sucesso.');
      this.returnToHome();
    });
  }

  returnToHome() {
    this.router.navigate(['/']);
  }
}
