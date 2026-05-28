import {Button} from "./Button";
import {SelectBox} from "./SelectBox";


export interface UIFactory {
    createButton():Button;

    createSelectBox():SelectBox;
}