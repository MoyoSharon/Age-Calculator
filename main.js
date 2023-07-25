console.log('Hello World!');
const name = document.querySelector(".name");
const year = document.querySelector(".year");
const ageSubmit = document.querySelector(".ageSubmit");
const ageResult = document.querySelector(".ageResult");
const userYear = Number(year.value);
const userName = Text(name.value);
const d = new Date();
let resetButton;
let age;

function backgroundChange() {
  if (age > 60 ) {
    document.body.style.backgroundColor = "red";
  }
  else if (age <= 44) {
    document.body.style.backgroundColor = "blue";
  }
  else {
    document.body.style.backgroundColor = "yellow";
  }
}

function calcAge(currentYear, userYear) {
  let currentYear = d.getFullYear();
  let age = currentYear - userYear;
  return age;
}

ageSubmit.addEventListener('click', submitAge);
resetButton.addEventListener('click', resetCalc);

function resetCalc() {
  const resetParas = document.querySelectorAll('.resultPara');
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
}

function submitAge()  {
  calcAge();
  backgroundChange();
  
  ageResult.textContent = "Hello ${userName}, you are ${age} years old now!"
  
   resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset"
  body.appendChild(button);
}