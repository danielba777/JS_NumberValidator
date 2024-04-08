const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click",() =>{
  
  if(userInput.value === ""){
    alert("Please provide a phone number");
    return;
  }

  const inputVal = userInput.value;
  userInput.value = "";
  console.log("inputVal: " + inputVal);
  checkNumber(inputVal);
});

clearBtn.addEventListener("click",() =>{

  userInput.value = '';
  resultsDiv.innerHTML = "";
});

const checkNumber = (input) =>{

  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  return regex.test(input) ? resultsDiv.innerHTML += `<p class="valid">Valid US number: ${input}<p>` : resultsDiv.innerHTML += `<p class="invalid">Invalid US number: ${input}</p>`;
}