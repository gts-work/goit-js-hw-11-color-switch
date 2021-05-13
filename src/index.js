import "./styles.css";
import { ColorSwitch } from "./js/plugin_color_switch";
import { refs } from "./js/refs";

const colorSwitch = new ColorSwitch({
    changeColor: updateClockface,
});

function updateClockface(color) {
    refs.body.style.backgroundColor = color;
}

refs.startBtn.addEventListener("click", colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener("click", colorSwitch.stop.bind(colorSwitch));
