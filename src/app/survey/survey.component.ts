import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit{
  loanForm: any;
  email: any;
  password: any;
  errorMsg: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loanForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });
  }

  onSubmit(){
    console.log(this.loanForm.value);
  }
}
