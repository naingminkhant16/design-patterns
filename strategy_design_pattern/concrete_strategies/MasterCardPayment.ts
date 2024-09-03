import { Payment } from "../strategy/Payment";

export class MasterCardPayment implements Payment {
  pay(): void {
    console.log("Pay with master card.");
  }
}