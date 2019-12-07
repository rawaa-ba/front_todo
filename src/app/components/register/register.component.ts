import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(formBuilder: FormBuilder,private router:Router,private userService:UserService) {
    this.registerForm = formBuilder.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.maxLength(13),
        Validators.minLength(8)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])

    })

  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get phone() { return this.registerForm.get('phone') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }


  ngOnInit() {
  }

  register() {
    let data =this.registerForm.value ;
    let user=new User(null,data.firstname,data.lastname,data.phone,data.email,data.password);
    this.userService.registerUser(user).subscribe((result)=>{
      console.log(result.message);
      this.router.navigate(['/'])
    },(erreur)=>{
      console.log(erreur);
    })
   }
}


