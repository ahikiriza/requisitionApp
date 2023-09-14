import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor( private authService: AuthService,
    private router: Router) { }

  logout(){
    this.authService.logout().subscribe(
      (response: any) => {
        if(response.success){
          this.router.navigate(['/login']);
        }
        // else{
          // this.router.navigate(['/login']);

        // }
      },
      (error) => {

      }
    );
  }

  ngOnInit(): void {
  }

}
