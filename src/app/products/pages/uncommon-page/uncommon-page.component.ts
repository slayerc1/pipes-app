import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Raul';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.name === 'Raul') {
      this.name = 'Melisa';
      this.gender = 'female';
    } else {
      this.name = 'Raul';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public clients: string[] = [
    'Raul',
    'Marta',
    'Jacinto',
    'Ana',
    'Yazmina',
    'Miguel',
    'Sergio',
    'Marcos',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Raul',
    age: '38',
    address: 'Algeciras, Cádiz',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promsea');
    }, 3500);
  });
}
