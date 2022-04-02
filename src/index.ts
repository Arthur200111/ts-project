import "./styles/main.scss";
import changeText from "./functionApi";

const textBtn = <HTMLButtonElement>document.getElementById("textBtn");

textBtn.addEventListener("click", changeText);

changeText();
