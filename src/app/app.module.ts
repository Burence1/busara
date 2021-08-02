import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SurveyComponent } from './components/survey/survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { AuthService } from './services/auth.service';

// angular material extensions
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    // angular material modules
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
