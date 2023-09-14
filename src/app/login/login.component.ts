import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string='';
  loginForm: FormGroup
  loginSuccess: boolean = false;
  loginError: boolean = false;

  constructor(private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('login successful', response);
        this.loginSuccess = true; 
        this.loginError = false;
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('login failed', error);
        this.loginSuccess = false;
        this.loginError = true;
      }
    );
  }

}
