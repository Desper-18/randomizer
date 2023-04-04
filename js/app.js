const form = document.querySelector('#generator-form');
const numberFrom = document.querySelector('#numberFrom');
const numberTo = document.querySelector('#numberTo');
const randomNumber = document.querySelector('#randomNumber');
const randomNums = [];

if (sessionStorage.getItem("randomNums")) {
  const randomNumsFromLS = JSON.parse(sessionStorage.getItem("randomNums"));
  randomNums.push(...randomNumsFromLS);
}

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

const generateTrueRandomNumber = function generate(min, max) {
  checkLimit(randomNums.length, max);
  const randomNum = Math.round(Math.random() * (max - min) + min);
  if (randomNums.includes(randomNum)) {
    return generate(min, max);
  } else {
    return randomNum;
  }
}

const checkLimit = (numLength, maxValue) => {
  if (numLength === maxValue) {
    modalWrapper.classList.remove("d-none");
    return;
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
  const randomNum = generateTrueRandomNumber(min, max);
  randomNums.push(randomNum);
  sessionStorage.setItem("randomNums", JSON.stringify([...randomNums]));
  randomNumber.textContent = randomNum;
  setTimeout(() => {
    randomNumber.classList.remove('tracking-in-expand-fwd-bottom');
  }, 1000);
}

form.addEventListener('submit', handleGeneratorForm);