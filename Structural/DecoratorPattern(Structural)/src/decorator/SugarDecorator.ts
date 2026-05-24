import CoffeeDecorator from "./CoffeeDecorator";

export default class SugarDecorator extends CoffeeDecorator {
    getCost(): number {
        return super.getCost() + 1;
    }

    getIngredient(): string[] {
        return [...super.getIngredient(), 'sugar'];
    }
}