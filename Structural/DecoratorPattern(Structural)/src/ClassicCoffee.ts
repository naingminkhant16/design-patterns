import Coffee from "./Coffee";

export default class ClassicCoffee implements Coffee {
    getCost(): number {
        return 1;
    }

    getIngredient(): string[] {
        return ['coffee', 'milk'];
    }
}