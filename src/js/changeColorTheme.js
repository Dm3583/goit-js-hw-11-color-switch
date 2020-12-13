import { colors } from './themeColors.js';
import { refs } from './refs.js';
export default { startThemeChange, stopThemeChange };

// console.log(colors);
// console.log(refs);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomColor(colorsArr) {
    let index = randomIntegerFromInterval(0, colorsArr.length - 1);
    return colorsArr[index];
};

function randomColorRender(el, colArr) {
    el.style.backgroundColor = getRandomColor(colArr);
};

let changeThemeInterval = null;

function startThemeChange() {
    console.log("START CLICK");

    changeThemeInterval = setInterval(randomColorRender, 1000, refs.body, colors);

    // variation 1
    // this.removeEventListener('click', startThemeChange);

    // variation 2
    this.disabled = true;
};

function stopThemeChange() {
    clearInterval(changeThemeInterval);

    // variation 1
    // refs.btnStart.addEventListener('click', startThemeChange);

    // variation 2
    refs.btnStart.disabled = false;
};

refs.btnStart.addEventListener('click', startThemeChange);
refs.btnStop.addEventListener('click', stopThemeChange);

// console.log(refs);