import { Payment } from "../strategy/Payment";

export class DebitCardPayment implements Payment {
  pay(): void {
    console.log("Pay with Debit Card.");
  }
}
