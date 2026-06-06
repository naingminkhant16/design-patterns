import {Invoice} from "./Invoice";
import {InvoiceBuilderInterface} from "./InvoiceBuilderInterface";

export class InvoiceBuilder implements InvoiceBuilderInterface {
    private invoice: Invoice;

    constructor() {
        this.invoice = new Invoice();
    }

    create(): InvoiceBuilderInterface {
        this.invoice = new Invoice();

        return this;
    }

    addItem(name: string, price: number, qty: number): InvoiceBuilderInterface {
        this.invoice.items?.push({name, price, qty});
        return this;
    }

    setTax(tax: number): InvoiceBuilderInterface {
        this.invoice.taxRate = tax;
        return this;
    }

    setDiscount(discount: number): InvoiceBuilderInterface {
        this.invoice.discount = discount
        return this;
    }

    setShipping(shipping: string): InvoiceBuilderInterface {
        this.invoice.shippingAddress = shipping
        return this;
    }

    setNotes(note: string): InvoiceBuilderInterface {
        this.invoice.note = note;
        return this;
    }

    getInvoice(): Invoice {
        return this.invoice;
    }
}