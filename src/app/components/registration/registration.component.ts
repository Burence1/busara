import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide = true
  reload: boolean = false
  isAuthenticated: boolean = false;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    if (formData.valid) {
      const data = {
        username: formData.value.username,
        password: formData.value.password,
      };
      this.auth.login(data).subscribe(
        (response) => {
          // this.toastr.success('Login successfull');
          this.router.navigate(['home']);
          this.isAuthenticated = true;
          console.log(data);
        },
        (error) => {
          alert('Login unsuccessfull');
        }
      );
    }
  }

  onRegister(formData: any) {
    if (formData.valid) {
      const data = {
        username: formData.value.username,
        email: formData.value.email,
        password1: formData.value.password1,
        password2:formData.value.password2,
        referral_code:formData.value.referral_code,
        phone_number:formData.value.phone_number,
        full_name:formData.value.full_name,
        device_details:formData.value.device_details,
        location:formData.value.location
      };
      this.auth.register(data).subscribe(
        (response) => {
          alert('Registration successful');
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert('Registration not successful');
        }
      );
    }
  }
}
