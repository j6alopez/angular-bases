import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacter(id: string): void {
    //TODO Emitir el ID del personaje
    this.onDeleteId.emit(id);
  }
}

// onDeleteId emitir el evento el indice

// en el main page recibir el evento y conectarlo con el main page y borrar el character
