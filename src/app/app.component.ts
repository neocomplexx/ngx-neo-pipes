import { Component } from '@angular/core';

@Component({
  selector: 'neo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public list = [
    { name: 'John', city: 'New York' },
    { name: 'Foo', city: 'Boston' },
    { name: 'Bar', city: 'New York' },
    { name: 'Moo', city: 'Chicago' },
    { name: 'Doe', city: 'New York' }];

  public searchDescripcion = '';
  public camelCase = 'CamelCaseParse';
}
