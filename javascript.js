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

// function hover() {
//   addEventListener('mouseover', (event) => {
//     if (event.target.classList.contains('grid-item')) {
//       event.target.style.backgroundColor = "orange";
    
//       setTimeout(() => {
//       event.target.style.backgroundColor = "";
//     }, 500);
//   }
//   });
// }

function hover() {
  container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-item')) {
      event.target.style.backgroundImage = "url('tangerine.png')";
      event.target.style.backgroundSize = "cover";
      event.target.style.backgroundPosition = "center";
      event.target.style.transition = "opacity 1s ease";
      event.target.style.opacity = "1";
    }
  });

  container.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('grid-item')) {
        setTimeout(() => {
          event.target.style.backgroundImage = "";
        }, 1000);
    }
  });
}

hover();