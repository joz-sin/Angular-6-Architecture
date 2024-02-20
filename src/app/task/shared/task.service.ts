import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  configUrl = 'http://localhost:3000/getTempSchedule';

  constructor(private http: HttpClient) {}

  getTask() {
    return this.http.get<any[]>(this.configUrl);
  }

}
