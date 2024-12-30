import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentListI, StudentListResponseI } from './Custom-interfaces';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KidsService {
  constructor(private http: HttpClient) {}

  saveStudent(studentInfo: any) {
    return this.http.post('http://localhost:3010/api/student', studentInfo);
  }

  logicToGetData(): Observable<StudentListResponseI> {
    return this.http
      .get<StudentListResponseI>('http://localhost:3010/api/student')
      .pipe(
        map((apiResp) => {
          return this.addYearsToStuResp(apiResp);
        })
      );
  }

  deleteData(id: any) {
    console.log(id);
    let endpoint = `http://localhost:3010/api/student/${id}`;
    return this.http.delete(endpoint);
  }

  getDataById(id: string) {
    let endpoint = `http://localhost:3010/api/student/${id}`;
    return this.http.get(endpoint);
  }

  updateForm(studentInfo) {
    return this.http.put('http://localhost:3010/api/student', studentInfo);
  }

  addYearsToStuResp(apiResp: StudentListResponseI): StudentListResponseI {
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    let updatedStuentsList = apiResp.data.map((student: StudentListI) => {
      return {
        ...student,
        noOfYears: student.year ? currentYear - student.year : '',
      };
    });

    return { ...apiResp, data: updatedStuentsList };
  }
}