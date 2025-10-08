const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  const value = btn.textContent;
  if (!isNaN(value)) {
    if (parseInt(value) % 2 === 0) {
      btn.setAttribute('data-type', 'even');
    } else {
      btn.setAttribute('data-type', 'odd');
    }
  } else {
    btn.setAttribute('data-type', 'operator');
  }
});

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
