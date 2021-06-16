import { Component, OnInit } from '@angular/core';
import { LoanDetailsService } from '../loan-details.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  loanDetails = [];
  hideme = [];
  Index: any;
  instalmentdeatils: any = [];
  constructor(private loanDetailsService: LoanDetailsService){}


  ngOnInit() {
    this.getLoanDetails();
  }

  /**
   *  Returns the list of Loans to display
   */
  public getLoanDetails() {
    let data = [];
    this.loanDetailsService.getLoanDetails().subscribe((data: any) => {
      this.loanDetails =data;

    })

  }

  /**
   * Returns the list of instalments to display
   * @param index
   * @param loanId
   */
  public showinstalmentDetails(index,loanId) {
    this.loanDetailsService.getIntalmentDetails(loanId).subscribe((res:any)=>{
      this.instalmentdeatils[index] = res;
    })
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

}
