import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  public heroNames: string[] = ['Hola','Adios', 'Antes'];
  public deletedHeroe?: string;

  removeLastHeroe() :void {
    this.deletedHeroe = this.heroNames.pop();
  }
}
