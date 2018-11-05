import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mobile: any;
  
  ngOnInit() {
  }

  states: string[] = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
      'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
      'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
  

  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]);
  name = new FormControl('', [Validators.required,Validators.minLength(3)]);
  address1 = new FormControl('', [Validators.required, Validators.minLength(3)]);
  number = new FormControl('', [Validators.required,Validators.minLength(3)]);
  city = new FormControl('', [Validators.required,Validators.minLength(3)]);
  state = new FormControl('', [Validators.required,Validators.minLength(3)]);
  pincode = new FormControl('', [Validators.required,Validators.minLength(6)]);
  password = new FormControl('', [Validators.required,Validators.minLength(3)]);
  role: any;
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a valid email' :
        this.email.hasError('email') ? 'Not a valid email' :'';
  }
  getErrorMessage1() {
    return this.email.hasError('required') ? 'You must enter at list 3 character' :
        this.email.hasError('name') ? 'Not a valid name' :'';
      }
      getErrorMessage2() {
        return this.email.hasError('required') ? 'Password most be at list 6 character' :
            this.email.hasError('name') ? 'Not a valid password' :'';
          }
          getErrorMessage4() {
                this.email.hasError('name') ? 'Not a valid number' :'';
              }
              getErrorMessage5() {
                return this.email.hasError('required') ? 'Pincode most be 6 digits' :
                    this.email.hasError('name') ? 'Not a valid pincode' :'';
                  }
  getErrorAddress3(){
        return this.address1.hasError('required') ? 'You must enter 3digit' :
        this.address1.hasError('minLength') ? 'Not a valid address' :'';
        return this.address1.hasError('required1') ? 'You must enter 3digit' :
        this.address1.hasError('minLength') ? 'Not a valid address' :'';
        return this.number.hasError('required1') ? 'You must enter 3digit' :
        this.number.hasError('minLength') ? 'Not a valid address' :'';
        return this.city.hasError('required1') ? 'You must enter 3digit' :
        this.city.hasError('minLength') ? 'Not a valid address' :'';
        return this.state.hasError('required1') ? 'You must enter 3digit' :
        this.state.hasError('minLength') ? 'Not a valid address' :'';
        return this.pincode.hasError('required') ? 'You must enter 3digit' :
        this.pincode.hasError('minLength') ? 'Not a valid address' :'';
        return this.password.hasError('required') ? 'You must enter 3digit' :
        this.password.hasError('minLength') ? 'Not a valid address' :'';
  }

  addUser() {
    let body = {
      "first_name":this.name,
      "role":this.role,
      "email":this.email,
   "mobile":this.mobile,
   "password":this.password,
  "address":this.address1,
  "city":this.city,
  "state":this.state,
  "pincode":this.pincode,
  
    }
    console.log("Raw data",body);
  }
  constructor() { }

  

}
