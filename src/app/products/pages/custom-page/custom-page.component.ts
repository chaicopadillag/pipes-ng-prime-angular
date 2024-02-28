import { Component } from '@angular/core';

enum ColorType {
  black,
  green,
  blue,
  red,
}

export type HeroType = {
  nombre: string;
  vuela: boolean;
  color: ColorType;
};

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styles: ``,
})
export class CustomPageComponent {
  isUppercase = false;
  sortByKey: keyof HeroType = 'nombre';

  public heroes: HeroType[] = [
    {
      nombre: 'Batman',
      vuela: true,
      color: ColorType.black,
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: ColorType.red,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: ColorType.green,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: ColorType.red,
    },
    {
      nombre: 'Guason',
      vuela: false,
      color: ColorType.blue,
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: ColorType.red,
    },
    {
      nombre: 'Acuaman',
      vuela: false,
      color: ColorType.blue,
    },
  ];

  toggleCase() {
    this.isUppercase = !this.isUppercase;
  }

  sortHeroBy(key: keyof HeroType) {
    this.sortByKey = key;
  }
}
