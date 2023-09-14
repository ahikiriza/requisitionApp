import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Student from '../Student'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url: string ="http://127.0.0.1:8000/api/"

  constructor( private http: HttpClient) { }


  // getStudents - url + students
  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.url}students/`)
  }

  // getStudentByID - url + student/:id
  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.url}student/${id}/`)
  }

  // addStudent - url +students
  addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.url}students/`, student)
  }

  // updateStudent - url + user/:id
  updateStudent(id: number, student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.url}student/${id}/`, student)
    }

  // deleteStudentById -url+student/:id
  deleteStudentByID(id:number): Observable<Student>{
    return this.http.delete<Student>(`${this.url}student/${id}/`)
  }

}
