import { Injectable } from '@angular/core';
import { Villain } from '../classes/villain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class VillainsService {

  constructor() { }

  villainsUrl = 'api/villains';

  abstract getVillains(): Observable<Villain[]>;
  abstract getVillain(id: number): Observable<Villain>;
  abstract addVillain(name: string, episode: string): Observable<Villain>;
  abstract deleteVillain(villain: Villain | number): Observable<Villain>;
  abstract searchVillain(term: string): Observable<Villain[]>;
  abstract updateVillain(villain: Villain): Observable<Villain>;

}
