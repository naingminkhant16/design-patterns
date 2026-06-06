type Item = {
    name: string
    price: number
    qty: number
}

export class Invoice {
    items: Item[] = [];
    taxRate: number = 0;
    discount: number = 0;
    shippingAddress: string = '';
    note: string = '';

    getTotal(): number {
        if (this.items) {
            let subTotal = this.items.reduce((sum, c) => sum + c.price, 0);
            subTotal -= this.discount;
            subTotal += subTotal * (this.taxRate / 100);
            return subTotal;
        }
        return 0;
    }
}