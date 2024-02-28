import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpperce: boolean = true): string {
    return toUpperce ? value.toUpperCase() : value.toLowerCase();
  }
}
