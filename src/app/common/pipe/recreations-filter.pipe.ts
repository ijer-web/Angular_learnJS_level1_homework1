import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recreationsFilter'
})
export class RecreationsFilterPipe implements PipeTransform {

  public transform(value: Recreation[], args: string[], additionIndicator?: boolean): Recreation [] {
    additionIndicator = !additionIndicator;
    if (!value) {
      return [];
    }
    return value.filter((recreation: Recreation) => {
      return args.every((arg: string) => {
        return recreation.type.includes(arg);
      });
    });
  }

}
