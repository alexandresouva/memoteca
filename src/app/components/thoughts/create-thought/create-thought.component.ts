import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ThoughtService } from '../thought.service';
import { ThoughtModel } from 'src/app/enums/thoughtModel';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor (
    private service: ThoughtService,
    private router: Router, 
    private formBuilder: FormBuilder
  ) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/), 
      ])],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      model: [ThoughtModel.Modelo1]
    });
  }

  createThought() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe();
      this.returnToHome(); 
    }
  }

  returnToHome() {
    this.router.navigate(['/']);
  }

}
