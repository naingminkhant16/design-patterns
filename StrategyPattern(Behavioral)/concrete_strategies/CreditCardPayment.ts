import { Payment } from "../strategy/Payment";

export class CreditCardPayment implements Payment {
  pay(): void {
    console.log("Pay with credit card.");
  }
}