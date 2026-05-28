import {UIFactory} from "../UIFactory";
import {Button} from "../Button";
import {SelectBox} from "../SelectBox";
import {WinButton} from "./WinButton";
import {WinSelectBox} from "./WinSelectBox";

export class WinFactory implements UIFactory {
    createButton(): Button {
        return new WinButton();
    }
    
    createSelectBox(): SelectBox {
        return new WinSelectBox();
    }
}