import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  constructor(){
  }
  addCarStatus = '';
  inputText = '';
  addCar(){
    this.addCarStatus = 'Car was add';
  };

}

