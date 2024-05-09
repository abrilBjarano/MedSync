import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Med } from '../interfaces/med.interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MedsService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http: HttpClient ) { }

  getMeds(): Observable<Med[]> {
    return this.http.get<Med[]>(`${ this.baseUrl }/meds`);
  }

}
