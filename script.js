const display = document.getElementById("display");

function appendValue(value) {
  if (value === 'C') {
    clearDisplay();
  } else {
    display.value += value;
  }
}

function square(){
  try{
    display.value= Math.pow(parseFloat(display.value),2);
  }catch{
    display.value="Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(parseFloat(display.value), 2);
  } catch {
    display.value = "Error";
  }
}



