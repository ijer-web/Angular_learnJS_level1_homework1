import { Component } from '@angular/core';
import { recreation$ } from '../data/index';
import { Observable } from 'rxjs/Observable';
import { RecreationService } from '../common/services/recreation-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  exportAs: 'recreationsList'

})
export class ListComponent {

  public recreations$: Observable<Recreation[]> = recreation$;
  public filterList: string[] = [];
  public applyFilterIndicator: boolean = false;
  public selectedRecreation: Recreation;

  public constructor( private _recreationServiceService: RecreationService) {
  }

  public ngOnInit(): void {
    this.recreations$ = this._recreationServiceService.getRecreations();
    this.recreations$.subscribe((recreations: Recreation[]) => {
      this.selectedRecreation = recreations[0];
    });
  }

  public toggleFilter(filterName: string): void {
    if (this.filterList.includes(filterName)) {
      this.filterList.splice(this.filterList.indexOf(filterName), 1);
    } else {
      this.filterList.push(filterName);
    }

    this.applyFilterIndicator = !this.applyFilterIndicator;// special, because angular dont' check changes in array
  }

  public isFilterSelected(filterName: string): boolean {
    return this.filterList.includes(filterName);
  }


  public set setSelectedRecreation(recreation: Recreation) {
    this.selectedRecreation = recreation;
  }
}
