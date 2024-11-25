import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'raul';
  public nameUpper: string = 'RAUL';
  public fullName: string = 'rAuL roDRiguEZ';

  public customDate: Date = new Date();
}
