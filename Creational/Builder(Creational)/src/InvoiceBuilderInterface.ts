import {Invoice} from "./Invoice";

export interface InvoiceBuilderInterface {
    create(): InvoiceBuilderInterface;

    addItem(name: string, price: number, qty: number): InvoiceBuilderInterface;

    setTax(tax: number): InvoiceBuilderInterface;

    setDiscount(discount: number): InvoiceBuilderInterface;

    setShipping(shipping: string): InvoiceBuilderInterface;

    setNotes(note: string): InvoiceBuilderInterface;

    getInvoice(): Invoice;
}