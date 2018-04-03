// Select color input
let color = document.querySelector('#colorPicker');
//select height
const height = document.getElementById('inputHeight');
// select width
const width = document.getElementById('inputWeight');
// Select submit input
let send = document.querySelector('#send');
//select table 
const selectTable = document.querySelector('#pixelCanvas');
let reset = document.getElementById('reset');
function makeGrid() {
    
    for (let i = 0; i < height.value; i++) {
        const row = document.createElement('tr');
        selectTable.appendChild(row)
        for (let j = 0; j < width.value; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
    }
  

}

function clearGrid() {
    selectTable.innerHTML = '';
}

// When size is submitted by the user, call makeGrid()
send.addEventListener('click', function (evt) {
    evt.preventDefault();
    clearGrid();
    makeGrid();

});
reset.addEventListener('click', clearGrid);
selectTable.addEventListener('click',function(evt){
 evt.target.style.backgroundColor=color.value;
});
selectTable.addEventListener('dblclick',function(evt){
 evt.target.style.backgroundColor='#fff';
});
