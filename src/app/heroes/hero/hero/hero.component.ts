import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age: number = 33;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
    
  }

  changeHero():void {
    this.name = 'Ironman';
  }

  changeAge(): void {
    this.age=11;
  }

}
