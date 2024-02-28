import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export class UncommonPageComponent {
  nombre = 'Jesus';

  gender: 'male' | 'female' = 'male';

  invitationMap = {
    male: 'Invitarlo',
    female: 'Invitarla',
  };

  changeName() {
    this.nombre = 'María';
    this.gender = 'female';
  }

  // pural
  clients = ['Jose', 'Maria', 'Carlos', 'Juan', 'Pedro', 'Ricardo', 'Percy'];

  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient() {
    this.clients.shift();
  }
  //KeyValue

  data = {
    name: 'Jose',
    age: 28,
    address: 'Chiclayo City',
  };
  // async

  public miObserverTimer = interval(1000).pipe(tap(console.log));
}
