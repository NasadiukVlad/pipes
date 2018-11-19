import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'polite',
  pure: false,
})
export class PolitePipe implements PipeTransform {
  public transform(value: any, isGreeting: boolean): any {
    if (isGreeting) {
      return 'Hi, ' + value + '!';
    } else {
      return 'Bye, ' + value + '!';
    }
  }
}
