import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-individual-details',
  templateUrl: './customer-individual-details.component.html',
  styleUrls: ['./customer-individual-details.component.css'],
})
export class CustomerIndividualDetailsComponent implements OnInit {
   custID:number;
   firstName:number;
   lastName:string;
   custEmail:string;
   custisActive:string;
   custDateCreated:string;
   custDateUpdated:string;
   title:string;
  constructor(private router: Router,
    private route: ActivatedRoute,) {

    this.route.params.subscribe(params => {
            this.custID = +params['id'];
            this.firstName = params['nameFirst'];
            this.lastName = params['nameLast'];
            this.custEmail = params['user_email'];
            this.custisActive = params['user_isactive'];
            this.custDateCreated = params['user_datecreated'];
            this.custDateUpdated = params['user_dateupdated'];
});
this.title="Customer Full Details";
}
  ngOnInit() {
  }

}
