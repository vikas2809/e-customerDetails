import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { routes } from './app.router';
import { FooterComponent } from './footer/footer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CategoryPipe } from './category.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { CustomerIndividualDetailsComponent } from './customer-individual-details/customer-individual-details.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerDetailsComponent,
    CategoryPipe,
    OrderbyPipe,
    CapitalizePipe,
    CustomerIndividualDetailsComponent,
    StarRatingComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
