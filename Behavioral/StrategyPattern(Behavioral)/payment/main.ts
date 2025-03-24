import * as readline from "readline";
import { PaymentController } from "./context/PaymentController";
import { Payment } from "./strategy/Payment";
import { CreditCardPayment } from "./concrete_strategies/CreditCardPayment";
import { DebitCardPayment } from "./concrete_strategies/DebitCardPayment";
import { MasterCardPayment } from "./concrete_strategies/MasterCardPayment";

console.log("Choose your payment : ");
console.log("1. For CreditCard payment.");
console.log("2. For DebitCard payment.");
console.log("3. For MasterCard payment.");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your payment method number: ", (answer) => {
  let paymentMethod: Payment;

  switch (answer) {
    case "1":
      paymentMethod = new CreditCardPayment();
      break;
    case "2":
      paymentMethod = new DebitCardPayment();
      break;
    case "3":
      paymentMethod = new MasterCardPayment();
      break;
    default:
      throw new Error("Invalid input!");
  }

  console.log("Start making payment process...");

  const paymentController = new PaymentController(paymentMethod);

  paymentController.makePayment();

  console.log("Payment process completed.");
  console.log("Happy Coding.");
  rl.close();
});
