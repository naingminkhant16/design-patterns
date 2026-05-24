import Coffee from "../Coffee";

export default abstract class CoffeeDecorator implements Coffee {
    constructor(private coffee: Coffee) {
    }

    getCost(): number {
        return this.coffee.getCost();
    }

    getIngredient(): string[] {
        return this.coffee.getIngredient();
    }
}