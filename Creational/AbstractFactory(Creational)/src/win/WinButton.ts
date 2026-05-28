import {Button} from "../Button";

export class WinButton implements Button {
    build(text: string, bgColor: string) {
        console.log("Window Button created with : ",text, bgColor);
    }
}