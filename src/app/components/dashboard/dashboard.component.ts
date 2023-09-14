import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allStudents: any[] =[];
  students: number;
  males: number;
  females: number;

  constructor( private commonService: CommonService ) { }

  ngOnInit(): void {
    this.commonService.getStudents().subscribe(data => {
      this.allStudents =data;
      console.log(this.allStudents.length);
      this.calculateSums();
    });

    
  }

  calculateSums(): void {
    this.students = this.allStudents.length;
  
    this.males = this.allStudents.reduce((sum, data) => {
      return data.gender === 'Male' ? sum + 1 : sum;
    }, 0);
  
    this.females = this.allStudents.reduce((sum, data) => {
      return data.gender === 'Female' ? sum + 1 : sum;
    }, 0);
  
  }

}
