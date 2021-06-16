import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoanDetailsService {


  private baseUrl = 'http://localhost:8080/api/';

  constructor(public http: HttpClient) { }

  /**
   * method for fetching data from spring rest api: loanDetails
   * @returns list of loan details
   */
  getLoanDetails() {
    return this.http.get<any[]>(this.baseUrl+"loanDetails");
  }

  /**
   * method for fetching data from spring rest api: installmentDetails
   * @param loanId \
   * @returns list of installment details
   */
  getIntalmentDetails(loanId) {
    return this.http.get<any[]>(this.baseUrl+"installmentDetails?loanId="+loanId);
  }
}
