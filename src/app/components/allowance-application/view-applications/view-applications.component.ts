import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
// import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {
  students: any[] =[];
  cols: {}[] =[];

  constructor(private commonService: CommonService,
    private router: Router,
    // confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {
    this.commonService.getStudents().subscribe(data => {
      this.students =data;
      console.log('all students',this.students);
    })
    this.cols =this.tableColumns;
    console.log('cols', this.cols);

  }

  tableColumns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "gender", header: "Gender" },
    { field: "registrationNumber", header: "Registration Number" },
    { field: "hall", header: "Hall of Residence" },
    { field: "residence", header: "Residence" },
    { field: "course", header: "Course Name" },
    { field: "telephone", header: "Telephone" },
    { field: "accountNumber", header: "Account No." },
  
  ];

  deleteStudent(id: number){
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete){
    this.commonService.deleteStudentByID(id).subscribe(data =>{
      // delete students from students array
      this.students =this.students.filter(student => student.id !==id);
    });
  } else {
    console.log('Deletion canceled');
  }}

  redirectToAddStudent(){
    this.router.navigate(['/add-application']);    
  }

}
