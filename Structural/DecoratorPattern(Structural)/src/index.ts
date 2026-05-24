import ClassicCoffee from "./ClassicCoffee";
import SugarDecorator from "./decorator/SugarDecorator";
import VanillaDecorator from "./decorator/VanillaDecorator";

const coffee = new ClassicCoffee();
console.log("ClassicCoffee", coffee.getCost(), coffee.getIngredient());

const addSugar = new SugarDecorator(coffee);
console.log("AddSugar", addSugar.getCost(), addSugar.getIngredient());

const addVanilla = new VanillaDecorator(addSugar);
console.log("VanillaCoffee", addVanilla.getCost(), addVanilla.getIngredient());