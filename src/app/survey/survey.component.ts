import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit{
  loanForm: any;

  loan_purpose: any;
  guarantor: any;

  first_name: any;
  last_name: any;
  birthplace: any;
  birthdate: any;
  phone: any;
  applicant_street_address: any;
  applicant_city: any;
  applicant_zip: any;
  cin: any;

  basic_salary: any;
  employment_verification_letter: any;

  mortgage_street_address: any;
  mortgage_city: any;
  mortgage_zip: any;
  used_for_business: any;

  loan_amount: any;
  loan_tenure: any;

  errorMsg: string = '';

  constructor(private fb: FormBuilder, private loanService: LoanService, private router: Router) {}

  ngOnInit() {
    this.loanForm = this.fb.group({
      loan_purpose: ['', [Validators.required]],
      guarantor: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birthplace: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      applicant_street_address: ['', [Validators.required]],
      applicant_city: ['', [Validators.required]],
      applicant_zip: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      basic_salary: ['', [Validators.required]],
      employment_verification_letter: ['', [Validators.required]],
      mortgage_street_address: ['', [Validators.required]],
      mortgage_city: ['', [Validators.required]],
      mortgage_zip: ['', [Validators.required]],
      used_for_business: ['', [Validators.required]],
      loan_amount: ['', [Validators.required]],
      loan_tenure: ['', [Validators.required]],
    });
  }

  onSubmit(){
    console.log(this.loanForm.value);
  }

  /*onSubmit(){
    this.loanService.addLoan(this.loanForm).subscribe(
     (response: any) => {
        console.log(response);
       //go to home page or print a message to user
     },
     (error) => {
       console.log(error);
       //this.errorMsg = "Veuillez vérifier vos identifiants"
     }
   );
}*/
}
