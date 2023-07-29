console.log('Hello World!');
const nameInput = document.querySelector(".name");
const yearInput = document.querySelector(".year");
const ageSubmit = document.querySelector(".ageSubmit");
const ageResult = document.querySelector(".ageResult");


const d = new Date(); 

let resetButton;
let age;


function calcAge() {
  const userYear = Number(yearInput.value);
  const currentYear = d.getFullYear();
  age = currentYear - userYear;
  return age;
}

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

ageSubmit.addEventListener('click', submitAge);


function submitAge()  {
  calcAge();
  backgroundChange();
  const userName = nameInput.value;
  ageResult.textContent = `Hello ${userName}, you are ${age} years old now!`
  
   resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset";
  document.body.appendChild(resetButton);
  resetButton.style.display = "block";
  resetButton.addEventListener('click', resetCalc);
}


function resetCalc() {
  const resetParas = document.querySelectorAll('.resultPara');
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  nameInput.value = "";
  yearInput.value = "";
  document.body.style.backgroundColor = "";
  resetButton.style.display = "none";
}
