import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedsService {

  private baseUrl = environments.baseUrl;

  constructor( private http: HttpClient ) { }


  getMeds(): Observable<Med[]> {

  }

}
