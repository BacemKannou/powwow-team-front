import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authenticationService : AuthenticationService, private router: Router) { }

  onSubmit(){
     this.authenticationService.login(this.loginForm.value).subscribe(response =>{
        console.log(response.headers.get('Authorization'))
        let jwt=response.headers.get('Authorization');
        this.authenticationService.saveToken(jwt);
        this.router.navigate(['default']);
      }, error=> {
      console.log("error in login ")
    });
    
    console.warn(this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
