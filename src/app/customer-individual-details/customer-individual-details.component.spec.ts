import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIndividualDetailsComponent } from './customer-individual-details.component';

describe('CustomerIndividualDetailsComponent', () => {
  let component: CustomerIndividualDetailsComponent;
  let fixture: ComponentFixture<CustomerIndividualDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerIndividualDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerIndividualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
