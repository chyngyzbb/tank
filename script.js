let tot = document.querySelector(".top");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let tankOne = document.querySelector(".tank");
let tankTwo = document.querySelector(".tank-two");
let car = document.querySelector(".car");
let carTwo = document.querySelector(".car-two");
let atom = document.querySelector(".atom");
let atomTwo = document.querySelector(".atom-two");
let fire = document.querySelector(".fire");
let atakaZv = document.querySelector(".ataka-zv");
let vzrZv = document.querySelector(".vzr-zv");
let enter = document.querySelector(".enter");
let shift = document.querySelector(".shift");
let gaz = document.querySelector(".gaz");
let gazZv = document.querySelector(".gaz-zv");
let zajiganieZv = document.querySelector(".zajiganie-zv");
let povorotZv = document.querySelector(".povorot-zv");

let positionX = 200;
let positionY = 250;
atom.style.display = "none";
atomTwo.style.display = "none";
// fire.style.display="none"

tankOne.addEventListener("click", () => {
  Menu(tankOne);
});
tankTwo.addEventListener("click", () => {
  Menu(tankTwo);
});
car.addEventListener("click", () => {
  Menu(car);
});
carTwo.addEventListener("click", () => {
  Menu(carTwo);
});
enter.addEventListener("click", () => {
  enterShiftFunc(atom);
});
shift.addEventListener("click", () => {
  enterShiftFunc(atomTwo);
});
gaz.addEventListener("click", () => {
  gazTank();
});

let evemtt = "bottom";

let tank = "";
function Menu(men) {
  zajiganieZv.play()
  car.style.left = "";
  car.style.top = "";
  car.style.transform = "";
  carTwo.style.left = "";
  carTwo.style.top = "";
  tankOne.style.left = "";
  tankOne.style.top = "";
  tankOne.style.transform = "";
  tankTwo.style.left = "";
  tankTwo.style.top = "";
  tank = men;
  return moveTank();
}

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    goTank(90, 270, "top");
    gazTank();
  } else if (e.key === "ArrowDown") {
    goTank(270, 90, "bottom");
    gazTank();
  } else if (e.key === "ArrowLeft") {
    goTank(0, 180, "left");
    gazTank();
  } else if (e.key === "ArrowRight") {
    goTank(180, 0, "right");
    gazTank();
  } else if (e.key === "Enter") {
    enterShiftFunc(atom);
  } else if (e.key === "Shift") {
    enterShiftFunc(atomTwo);
  }
});

function atomFunc(ato) {
  fire.style.transition = "1s";
  atakaZv.play();
  setTimeout(() => {
    fire.style.display = "none";
    ato.style.display = "block";
    vzrZv.play();
  }, 1000);
  setTimeout(() => {
    fire.style.display = "block";
    ato.style.display = "none";
    moveTank();
  }, 2000);
}
function gazTank() {
  gazZv.play()

  if (evemtt === "top") {
    positionY -= 40;
    moveTank();
  } else if (evemtt === "bottom") {
    positionY += 40;
    moveTank();
  } else if (evemtt === "left") {
    positionX -= 40;
    moveTank();
  } else if (evemtt === "right") {
    positionX +=40;
    moveTank();
  }
  

}

function moveTank() {
 
  tank.style.left = `${positionX}px`;
  tank.style.top = `${positionY}px`;
  fire.style.left = `${positionX + 55}px`;
  fire.style.top = `${positionY + 20}px`;
  atom.style.left = `${positionX + 35}px`;
  atom.style.top = `${positionY - 50}px`;
  atomTwo.style.left = `${positionX}px`;
  atomTwo.style.top = `${positionY - 50}px`;
}

function goTank( rotTank, rotFire, pos) {
 
  tank.style.transform = `rotate(${rotTank}deg)`;
  fire.style.transform = `rotate(${rotFire}deg)`;
  atom.style.transform = `rotate(${rotFire}deg)`;
  atomTwo.style.transform = `rotate(${rotFire}deg)`;
  evemtt === pos ? '' :  povorotZv.play()
  evemtt = pos;
  console.log(evemtt);
}

tot.addEventListener("click", () => {
  goTank(90, 270, "top");
});
bottom.addEventListener("click", () => {
  goTank(270, 90, "bottom");
});
left.addEventListener("click", () => {
  goTank( 0, 180, "left");
});
right.addEventListener("click", () => {
  goTank(180, 0, "right");
});

function enterShiftFunc(o) {
  if (evemtt === "top") {
    o.style.top = `${positionY - 300}px`;
    fire.style.top = `${positionY - 300}px`;
    atomFunc(o);
  } else if (evemtt === "bottom") {
    o.style.top = `${positionY + 300}px`;
    fire.style.top = `${positionY + 300}px`;
    fire.style.transition = "2s";
    atomFunc(o);
  } else if (evemtt === "left") {
    o.style.left = `${positionX - 300}px`;
    fire.style.left = `${positionX - 300}px`;
    fire.style.transition = "2s";
    atomFunc(o);
  } else if (evemtt === "right") {
    o.style.left = `${positionX + 300}px`;
    fire.style.left = `${positionX + 300}px`;
    fire.style.transition = "2s";
    atomFunc(o);
  }
}
