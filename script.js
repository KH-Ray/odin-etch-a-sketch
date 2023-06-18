const grid = document.querySelector(".container");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  let userInput = Number(prompt("Please enter a number (Max. 100):"));

  if (userInput > 0 && userInput <= 100) {
    grid.innerHTML = "";
    grid.style.setProperty(
      "grid-template-columns",
      `repeat(${userInput}, 2fr)`
    );
    grid.style.setProperty("grid-template-rows", `repeat(${userInput}, 2fr)`);
    for (let i = 0; i < userInput * userInput; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
    }
  } else {
    alert("Please enter a valid number");
  }
};

const square = document.querySelector("div");
square.addEventListener("mouseover", (e) => {
  e.target.classList.replace("square", "color");
});

createGrid();
