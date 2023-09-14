import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {

  student: any;
  data: any;
  
  constructor(
    private commonService: CommonService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    let id =this.route.snapshot.params['id']
    this.commonService.getStudentById(id).subscribe(data =>{
      this.student =data;
      console.log('data', data);
    })
  }
    form = new FormGroup({
      name: new FormControl('', Validators.required),
      registrationNumber: new FormControl('', Validators.required),
      hall: new FormControl('', Validators.required),
      residence: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      // email: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required),
    })
  
    submit(){
      this.data =this.form.value
      this.student.name =this.data.name;
      this.student.registrationNumber =this.data.registrationNumber;
      this.student.hall =this.data.hall;
      this.student.residence =this.data.residence;
      this.student.course =this.data.course;
      this.student.telephone =this.data.telephone;
      // this.student.email =this.data.email;
      this.student.accountNumber =this.data.accountNumber;
      console.log('on submit',this.data);

      this.commonService.updateStudent(this.student?.id, this.student).subscribe(data =>{
        console.log('updated',data)
      })

      this.router.navigate(['/view-applications']);
    }
  

}
