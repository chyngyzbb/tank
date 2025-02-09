let tot = document.querySelector(".top");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let tankOne = document.querySelector(".tank");
let tankTwo = document.querySelector(".tank-two");
let car = document.querySelector(".car");
let carTwo = document.querySelector(".car-two");

let positionX = 600;
let positionY = 250;

// tot.style.background = "rgb(233, 169, 73)";
// right.style.background = "rgb(233, 169, 73)";
// left.style.background = "rgb(233, 169, 73)";
// bottom.style.background = "rgb(233, 169, 73)";

tankOne.addEventListener('click',()=>{
  Menu(tankOne)
})
tankTwo.addEventListener('click',()=>{
  Menu(tankTwo)
})
car.addEventListener('click',()=>{
  Menu(car)
})
carTwo.addEventListener('click',()=>{
  Menu(carTwo)
})

let tank=''
function Menu(men){
  car.style.left = '';
  car.style.top = '';
  carTwo.style.left = '';
  carTwo.style.top = '';
  tankOne.style.left = '';
  tankOne.style.top = '';
  tankTwo.style.left = '';
  tankTwo.style.top = '';
  tank=men
  return moveTank()
}


document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    positionY -= 10;
    tank.style.transform = "rotate(90deg)";
    moveTank();
  } else if (e.key === "ArrowDown") {
    positionY += 10;
    tank.style.transform = "rotate(270deg)";
    moveTank();
  } else if (e.key === "ArrowLeft") {
    positionX -= 10;
    tank.style.transform = "rotate(0deg)";
    moveTank();
  }
   else if (e.key === "ArrowRight") {
    positionX += 10;
    tank.style.transform = "rotate(180deg)";
    moveTank();
  }
});

function moveTank() {
  tank.style.left = `${positionX}px`;
  tank.style.top = `${positionY}px`;
}

tot.addEventListener("click", () => {
  positionY -= 10;
  tank.style.transform = "rotate(90deg)";
  moveTank();
});
bottom.addEventListener("click", () => {
  positionY += 10;
  tank.style.transform = "rotate(270deg)";
  moveTank();
});
left.addEventListener("click", () => {
  positionX -= 10;
  tank.style.transform = "rotate(0deg)";
  moveTank();
});
right.addEventListener("click", () => {
  positionX += 10;
  tank.style.transform = "rotate(180deg)";
  moveTank();
});
