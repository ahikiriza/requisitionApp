import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private router: Router
    ) { }


  data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    registrationNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    hall: new FormControl('', Validators.required),
    residence: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
  })  

  addStudent(){
    this.data =this.form.value;
    console.log(this.data);
    this.commonService.addStudent(this.data).subscribe(data =>{
      this.router.navigate(["./view-applications"]);
    })
  }

  ngOnInit(): void {
  }

}

  


