const numerRef = document.querySelector('input[type="number"]');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const divRef = document.querySelector('#boxes');


function randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const color = `rgb(${x},${y},${z})`;
    return color;
};

function createBoxes(amount) {
    const box = [];
    let step = 0;
    for (let i = 1; i <= amount; i += 1) {
        const boxItem = document.createElement('div');
        boxItem.classList.add("box");
        boxItem.style.backgroundColor = randomColor();
        boxItem.style.width = `${30+step}px`;
        boxItem.style.height = `${30+step}px`;
        boxItem.style.margin = "10px";
        box.push(boxItem);
        step += 10;
    };
    divRef.append(...box);
};

/* function destroyBoxes() {
    while (divRef.firstChild) {
        divRef.removeChild(divRef.firstChild);
    };
}; */

function destroyBoxes() {
    divRef.innerHTML = '<div id="boxes"></div>';
    numerRef.value = '';
};

renderRef.addEventListener('click', () => {
    const numberOfBoxes = Number(numerRef.value);
    createBoxes(numberOfBoxes);
});

destroyRef.addEventListener('click', destroyBoxes)