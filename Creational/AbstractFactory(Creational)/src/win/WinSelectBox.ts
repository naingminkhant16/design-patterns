import {SelectBox} from "../SelectBox";

export class WinSelectBox implements SelectBox {
    build(text: string, options: string[]) {
        console.log("Window Select Box created with : ",text, options);
    }
}