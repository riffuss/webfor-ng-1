import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'Nissan', 'Mazda', 'Porshe', 'Kia', 'Volvo'];
  dates = [
    new Date(2014, 3, 4),
    new Date(2011, 1, 11),
    new Date(2020, 6, 7),
    new Date(2018, 11, 8)
  ];


  constructor(){
  }
  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

 
}

