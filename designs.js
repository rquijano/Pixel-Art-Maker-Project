// Intro to Programming Nano-Degree - Pixel Art Maker Project
// By Richard Quijano - 6/2019

let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

makeGrid(height, width);

// function to allow the user to choose the size of the grid
sizePicker.addEventListener('click', (e) => {
  e.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  table.firstElementChild.remove();
  makeGrid(height, width);
});

// function to create the grid once the user chooses a size
function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener('click', (e) => {
        cell.style.backgroundColor = color.value;
      });
    }
  }
}
