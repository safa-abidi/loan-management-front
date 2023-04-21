import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { LoanDemand } from './models/loan-demand';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  url = "http://localhost:3000/addLoan"; //change this later

  constructor(private httpService : HttpClient) { }

  addLoan(loanDemand : FormGroup){
    return this.httpService.post(this.url, loanDemand.value);
  }
}
