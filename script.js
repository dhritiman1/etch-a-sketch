const gridContainer = document.querySelector('.grid');
const layout = document.querySelector('#slider');
const size = document.querySelector('.size');
const color = document.querySelector('#brush-color');

let brush = 'black';
function setBrushColor(newColor){
    brush = newColor;
}

color.addEventListener('input', (e) => {
    setBrushColor(e.target.value);
});

let x = 16;
function setDifferentSize(newSize){
    x = newSize;
}

size.innerHTML = `${x} x ${x}`;

layout.addEventListener('mousemove', (e) => {
    updateSize(e.target.value);
});
layout.addEventListener('change', (e) => {
    changeSize(e.target.value);
});

function updateSize(x){
    size.innerHTML = `${x} x ${x}`;
}

function changeSize(x){
    setDifferentSize(x);
    updateSize(x);
    changeGrid();
}

function cleanGrid(){
    gridContainer.innerHTML = '';
}

function changeGrid(){
    cleanGrid();
    createGrid(x, brush);
}

function createGrid(x, brush) {
    for (let i = 0; i < x * x; i++) {
        const gridElements = document.createElement('div');
        gridElements.classList.add('grid-elements');
        gridElements.style.width = (480 / x) + "px";
        gridElements.style.height = (480 / x) + "px";

        gridElements.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = brush;
        });
        gridContainer.append(gridElements);
    }
}

// draw button
const draw = document.querySelector('#draw');
draw.addEventListener('click', () => {
    let gridEle = gridContainer.children;

    for (let i = 0; i < x * x; i++) {
        gridEle[i].addEventListener('mouseover', function (event) {
            gridEle[i].style.backgroundColor = brush;
        });
    }
});

// eraser button
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    let gridEle = gridContainer.children;
    for (let i = 0; i < x * x; i++) {
        gridEle[i].addEventListener('mouseover', function (event) {
            gridEle[i].style.backgroundColor = 'white';
        });
        
    }
});

// random color
let randomColors = ['#3F8A8C', '#0C5679', '#0B0835', '#E5340B', '#F28A0F', '#FFE7BD', '#804E3B', '#887C56', '#EFD7B8', '#EC7D11',
    '#982608', '#1B2740', '#D77A4F', '#F5DCC7', '#B2926C', '#705239', '#3E1327', '#70855F', '#A2A67C', '#F5E2BC',
    '#EDCA91', '#DB864D', '#C9643C', '#301414', '#383557'];
const random = document.querySelector('#random');
random.addEventListener('click', () => {
    let gridEle = gridContainer.children;
    for (let i = 0; i < x * x; i++) {
        gridEle[i].addEventListener('mouseover', function (event) {
            gridEle[i].style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        });
    }
});

// clear button 
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    let gridEle = gridContainer.children;
    for (let i = 0; i < x * x; i++) {
        gridEle[i].style.backgroundColor = 'white';
    }
});

window.onload = () =>{
    createGrid(x);
}