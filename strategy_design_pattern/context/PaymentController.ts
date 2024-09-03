import { Payment } from "../strategy/Payment";

export class PaymentController {
  private payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  /**
   * makePayment
   */
  public makePayment() {
    this.payment.pay();
  }
}