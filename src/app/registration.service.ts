import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) {}

  registerUser(registrationData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, registrationData);
  }
}
