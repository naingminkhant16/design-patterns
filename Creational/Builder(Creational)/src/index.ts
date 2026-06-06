import {InvoiceBuilder} from "./InvoiceBuilder";

const invoiceBuilder = new InvoiceBuilder();
const invoice = invoiceBuilder.create()
    .addItem('Book', 100, 1)
    .addItem('Pencil', 2, 3)
    .addItem('Pen', 5, 2)
    .setDiscount(5)
    .setTax(10)
    .setShipping('Yangon')
    .setNotes('CoD')
    .getInvoice();

console.log(invoice)
console.log(invoice.getTotal())
