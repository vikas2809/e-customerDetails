import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
welcome: string;
records: Array<any>;
    isDesc: boolean = false;
    column: string = 'firstName';
    direction: number;
  constructor() {
    this.welcome="Customer Details"
  		 this.records = [
      { id: 1,
                lastName: "doe",
                firstName: "john",
                email: "john.doe@example.com",
                isActive: "yes",
                dateCreated: "2007-08-30 23:23:13",
                dateUpdated: "2008-08-08 12:28:24"
      },
      { id: 2,
                lastName: "feraro",
                firstName: "richard",
                email: "richardferaro@localhost.local",
                isActive: "yes",
                dateCreated: "2010-05-10 15:25:47",
                dateUpdated: "2010-05-10 15:25:48"
      },
      { id: 3,
                lastName: "dela cruz",
                firstName: "Juan",
                email: "juan@localhost.com",
                isActive: "yes",
                dateCreated: "2010-08-17 12:13:05",
                dateUpdated: "2010-08-17 12:13:05"
      },
      { id: 4,
                lastName: "dela cruzx",
                firstName: "Juan",
                email: "juanx@localhost.com",
                isActive: "yes",
                dateCreated: "2010-08-17 12:19:40",
                dateUpdated: "2010-08-17 12:19:40"
      },
      { id:5,
                lastName: "dela Cruz",
                firstName: "Juan",
                email: "sample@localhost.local",
                isActive: "yes",
                dateCreated: "2010-08-17 12:34:48",
                dateUpdated: "2010-08-17 12:34:48"
      }
     ];
  }
  sort(property){
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  ngOnInit() {
  }

}
