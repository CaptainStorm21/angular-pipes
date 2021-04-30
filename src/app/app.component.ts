import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;


  // Name
  onNameChange(value: string) {
    this.name = value;
  }

  //Payment date
  onDateSet(value: string) {
    this.date = value;
  }

  //Payment
  onPaymentAmount(value: number) {
    this.amount = value;
  }

  //height
  onHeight(value: number) {
    this.height = value;
  }

  //miles
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

    // for json object pipe
  paymentObject = {
    name: 'Alice',
    amount: '1',
    type: 'Fox',
    residence: 'Moscow'
  }

}
