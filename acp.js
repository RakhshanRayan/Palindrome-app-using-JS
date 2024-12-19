function clickFunction() {
  let bg = document.getElementById("background");
  let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "indigo",
    "cornflowerblue",
    "pink",
    "orange",
  ];
  const colorIndex = parseInt(Math.random() * colors.length);
  bg.style.backgroundColor = colors[colorIndex];
}
