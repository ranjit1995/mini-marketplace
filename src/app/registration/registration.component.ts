import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mobile: any;
  Email: any;
  selectedValue: any;
  cName: any;
  
  mobileno: any;
  address: any;
  secondAddress: any;
  firstAddress: any;
  cities: any;
  State: any;
  Password: any;
  Pincode: any;
  show: boolean;
  userName: any;

  constructor(private _router: Router,private Registration: AuthService) { 
// initialize variable value
    this.show = false;
  }

  ngOnInit() {
  }
  viewpass()
  {
    this.show = !this.show;
  }

  // states: string[] = [
  //     'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  //     'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  //     'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  //     'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  //     'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  //     'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  //     'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  //   ];
  

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required,Validators.minLength(3)]);
  address1 = new FormControl('', [Validators.required, Validators.minLength(5)]);
  number = new FormControl('', [Validators.required,Validators.minLength(10)]);
  city = new FormControl('', [Validators.required,Validators.minLength(5)]);
  state = new FormControl('', [Validators.required,Validators.minLength(5)]);
  pincode = new FormControl('', [Validators.required,Validators.minLength(6)]);
  password = new FormControl('', [Validators.required,Validators.minLength(8)]);
  cname = new FormControl('', [Validators.required,Validators.minLength(3)]);
  role: any;
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a valid email' :
        this.email.hasError('email') ? 'Not a valid email' :'';
  }
  getErrorMessage1() {
    return this.email.hasError('required') ? 'You must enter at least 3 character' :
        this.email.hasError('name') ? 'Not a valid name' :'';
      }
      getErrorMessage2() {
        return this.email.hasError('required') ? 'Password most be at least 8 character' :
            this.email.hasError('name') ? 'Not a valid password' :'';
          }
          getErrorMessage4() {
                this.email.hasError('name') ? 'Not a valid number' :'';
              }
              getErrorMessage5() {
                return this.email.hasError('required') ? 'Pincode most be 6 digits' :
                    this.email.hasError('name') ? 'Not a valid pincode' :'';
                  }
                  getErrorMessage6() {
                    return this.email.hasError('required') ? 'You must enter at least 3 character' :
                        this.email.hasError('name') ? 'Not a valid company name' :'';
                      }         
  getErrorAddress3(){
        return this.address1.hasError('required') ? 'You must enter 3 digit' :
        this.address1.hasError('minLength') ? 'Not a valid address' :'';
        return this.address1.hasError('required1') ? 'You must enter 3 digit' :
        this.address1.hasError('minLength') ? 'Not a valid address' :'';
        return this.number.hasError('required1') ? 'You must enter 3 digit' :
        this.number.hasError('minLength') ? 'Not a valid address' :'';
        return this.city.hasError('required1') ? 'You must enter 3 digit' :
        this.city.hasError('minLength') ? 'Not a valid address' :'';
        return this.state.hasError('required1') ? 'You must enter 3 digit' :
        this.state.hasError('minLength') ? 'Not a valid address' :'';
        return this.pincode.hasError('required') ? 'You must enter 3 digit' :
        this.pincode.hasError('minLength') ? 'Not a valid address' :'';
        return this.password.hasError('required') ? 'You must enter 3 digit' :
        this.password.hasError('minLength') ? 'Not a valid address' :'';
  }

  addUser() {
    let body = {
      "name":this.userName,
      "role_id":this.selectedValue,
      "email":this.Email,
      "company_name":this.cName,
   "mobile":this.mobileno,
   "password":this.Password,
  "address_line1":this.address,
  "address_line2":this.secondAddress,
  "city":this.cities,
  "state":this.State,
  "pincode":this.Pincode,
  
    }
    console.log("Raw data",body);
    this.Registration.registration(body).subscribe(
      error => {
      console.log("error: result...:", error);
     alert("registration successfull");
      this._router.navigate(['/auth/login']); 
    },
    data=>{
      console.log("success: result...:", data.status);
      if(data.status===201)
     {
      this._router.navigate(['/auth/login']);
      alert("registration successfull");
    
     }
     if(data.status===401)
     {
      alert("invalid user or password");
     }
    }
    );
  
  
  }
  
}
