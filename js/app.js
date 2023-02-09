const form = document.querySelector('#generator-form');
const numberFrom = document.querySelector('#numberFrom');
const numberTo = document.querySelector('#numberTo');
const randomNumber = document.querySelector('#randomNumber')

const validateInput = (input) => {
  if (!input.value) {
    input.classList.add('is-invalid')
    const parentNode = input.closest('.form-floating');
    const errMessageEl = parentNode.querySelector('.invalid-feedback');
    errMessageEl.textContent = 'Поле не должно быть пустым';
    return false;
  } else {
    input.classList.remove('is-invalid')
    const parentNode = input.closest('.form-floating');
    const errMessageEl = parentNode.querySelector('.invalid-feedback');
    errMessageEl.textContent = '';
    return true;
  }
}

const checkMinMax = (input1, input2) => {
  if (parseInt(input1.value) > parseInt(input2.value)) {
    input2.classList.add('is-invalid')
    const parentNode = input2.closest('.form-floating');
    const errMessageEl = parentNode.querySelector('.invalid-feedback');
    errMessageEl.textContent = 'Число "До" не может быть меньше числа "От"';
    return false;
  } else {
    input2.classList.remove('is-invalid')
    const parentNode = input2.closest('.form-floating');
    const errMessageEl = parentNode.querySelector('.invalid-feedback');
    errMessageEl.textContent = '';
    return true;
  }
}

const handleGeneratorForm = (evt) => {
  evt.preventDefault();
  if (!validateInput(numberFrom)) return;
  if (!validateInput(numberTo)) return;
  if (!checkMinMax(numberFrom, numberTo)) return;

  const min = Math.ceil(parseInt(numberFrom.value));
  const max = Math.floor(parseInt(numberTo.value));
  randomNumber.classList.add('tracking-in-expand-fwd-bottom');
  randomNumber.textContent = Math.round(Math.random() * (max - min) + min);
  setTimeout(() => {
    randomNumber.classList.remove('tracking-in-expand-fwd-bottom');
  }, 1000);
}

form.addEventListener('submit', handleGeneratorForm);