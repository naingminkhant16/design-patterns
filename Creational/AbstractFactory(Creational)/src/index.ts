// Win UI
import {WinFactory} from "./win/WinFactory";
import {MacFactory} from "./mac/MacFactory";

const winUI = new WinFactory();
const winBtn= winUI.createButton();
winBtn.build("Submit","#333");

const winSelectBox = winUI.createSelectBox();
winSelectBox.build("Programming Languages",["PHP","TS","JS","Go"])

// Mac UI
const macUI = new MacFactory();
const macBtn = macUI.createButton();
macBtn.build("Submit","#eee");

const macSelectBox = macUI.createSelectBox();
macSelectBox.build("Programming Languages",["PHP","TS","JS","Go"])

