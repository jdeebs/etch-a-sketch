const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

function hover() {
  addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-item')) {
      event.target.style.backgroundColor = "orange";
    
      setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 500);
  }
  });
}

hover();