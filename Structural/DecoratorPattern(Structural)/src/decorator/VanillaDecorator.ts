import CoffeeDecorator from "./CoffeeDecorator";

export default class VanillaDecorator extends CoffeeDecorator {
    getCost(): number {
        return super.getCost() + 2;
    }

    getIngredient(): string[] {
        return [...super.getIngredient(), 'vanilla'];
    }
}