import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nailservice } from './nailservice-list/Nailservice';
import { of, tap, map } from 'rxjs';

const URL = 'https://638619c2beaa645826732006.mockapi.io/nailservices';

@Injectable({
  providedIn: 'root'
})
export class NailserviceDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Nailservice[]>{

    return this.http.get<Nailservice[]>(URL);
            
  }
}
