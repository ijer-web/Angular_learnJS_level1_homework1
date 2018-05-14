import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { recreation$ } from '../../data/index';

@Injectable()
export class RecreationService {
  public recreationsList$: Observable<Recreation[]>;

  // constructor() { }

  public getRecreations(): Observable<Recreation[]> {
    this.recreationsList$ = recreation$;

    return this.recreationsList$;
  }
}
