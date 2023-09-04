const container = document.getElementById("container");
const after = document.getElementById("after");
const btn = document.querySelector('.btn');




function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};



document.addEventListener("DOMContentLoaded", makeRows(16,16));


function clearDiv(){
    container.innerHTML = "";
}

btn.addEventListener('click', () => {
    clearDiv();
    let squares = prompt("Enter the number of squares");

    if(squares < 0){
        document.querySelector('div').remove();
        let h2 = document.createElement('h2');
        h2.innerText = 'Negative Number';
        after.append(h2);
    }
    else if(squares > 0 && squares<=100){
        makeRows(squares,squares);
    }
    else if(squares > 100){
        let h2 = document.createElement('h2');
        h2.innerText = 'Enter a number less than 100';
        after.append(h2);
    }
    
    
});

document.querySelector('#container').addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black'
})