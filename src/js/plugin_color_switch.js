import { colors } from "./colors_palette";

const DELAY = 1000;

export class ColorSwitch {
    constructor({ changeColor }) {
        this.intervalId = null;
        this.isActive = false;
        this.changeColor = changeColor;

        this.init();
    }

    init() {
        this.changeColor(colors[0]);
    }

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
            const colorIndex = this.randomIntegerFromInterval(1, colors.length);
            console.log(
                "ColorSwitch ~ this.intervalId=setInterval ~ colorIndex",
                colorIndex
            );
            this.changeColor(colors[colorIndex]);
        }, DELAY);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }

    randomIntegerFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
