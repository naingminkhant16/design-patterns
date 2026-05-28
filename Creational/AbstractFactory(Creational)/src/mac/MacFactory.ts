import {UIFactory} from "../UIFactory";
import {Button} from "../Button";
import {SelectBox} from "../SelectBox";
import {MacButton} from "./MacButton";
import {MacSelectBox} from "./MacSelectBox";

export class MacFactory implements UIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createSelectBox(): SelectBox {
        return new MacSelectBox();
    }
}