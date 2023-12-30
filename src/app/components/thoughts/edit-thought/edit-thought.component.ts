import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(Number(id)).subscribe((thought) => {
      console.log(thought);
      
      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/), 
        ])],
        author: [thought.author, Validators.compose([
          Validators.required,
          Validators.minLength(3),
        ])],
        model: [thought.model]
      });
    });
  }

  editThought() {
    this.service.edit(this.form.value).subscribe(() => {      
      alert('Editado com sucesso.');
      this.returnToHome();
    });
  }

  returnToHome() {
    this.router.navigate(['/']);
  }
}
