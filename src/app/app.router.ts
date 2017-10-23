import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerIndividualDetailsComponent } from './customer-individual-details/customer-individual-details.component';

export const router: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'home', component: WelcomeComponent},
	{ path: 'cust_details', component: CustomerIndividualDetailsComponent},
	{ path: 'details', component: CustomerDetailsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
