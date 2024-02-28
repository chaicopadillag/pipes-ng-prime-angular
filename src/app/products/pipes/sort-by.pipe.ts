import { Pipe, PipeTransform } from '@angular/core';
import { HeroType } from '../pages/custom-page/custom-page.component';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: HeroType[], sortBy: keyof HeroType): HeroType[] {
    switch (sortBy) {
      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      case 'vuela':
        return heroes.sort((a, b) => (a.vuela > b.vuela ? 1 : -1));
      default:
        return heroes;
    }
  }
}
