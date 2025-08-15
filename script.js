const display = document.getElementById('display');

function appendValue(val) {
  display.value = display.value === '0' ? val : display.value + val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value) + '';
  } catch {
    display.value = 'Error';
    setTimeout(() => clearDisplay(), 1000);
  }
}
