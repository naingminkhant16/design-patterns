import {Button} from "../Button";

export class MacButton implements Button {
    build(text: string, bgColor: string) {
        console.log("Mac Button created with : ",text, bgColor);
    }
}