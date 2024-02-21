import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  <h1>{{title}}</h1>
  <h3>Counter {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">RESET</button>
  <button (click)="decreaseBy(1)">-1</button>

  `
})
export class CounterComponent {

  public title:string = 'Hola Mundo Angular 17';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter +=value;
  }

  decreaseBy(value:number):void{
    this.counter -=value;
  }

  reset():void{
    this.counter = 10;
  }
}
