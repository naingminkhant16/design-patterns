import {SelectBox} from "../SelectBox";

export class MacSelectBox  implements SelectBox {
    build(text: string, options: string[]) {
        console.log("Mac Select Box created with : ",text, options);
    }
}