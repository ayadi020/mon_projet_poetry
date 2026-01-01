import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { monoprix } from '../../models/monoprix';

@Injectable({
  providedIn: 'root'
})
export class MonoprixService {

  apiUrl = environment.baseUrl + 'api/monoprix/';

  constructor(private http: HttpClient) {}

  getMonoprixData(): Observable<monoprix[]> {
    return this.http.get<monoprix[]>(this.apiUrl + 'list');
  }
}
