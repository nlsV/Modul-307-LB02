// elemente benennen
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const telefon = document.getElementById('telefonnummer');
const agb = document.getElementById('agbcheck').checked;
const name = document.getElementById('name');

// error anzeigen
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// success anzeigen
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// email überprüfen
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'E-Mail ist ungültig');
  }
}

// leere felder
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input){
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} muss angegeben werden`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// länge überprüfen
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input,
        `${getFieldName(input)} muss mehr als ${min} Buchstaben enthalten`
    );
  } else if (input.value.length > max) {
    showError(input,
        `${getFieldName(input)} muss weniger als ${max} Buchstaben enthalten`
    );
  } else {
    showSuccess(input);
  }
}

// fieldName erhalten
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// validateForm input elemente
function validateForm(){
  if(!checkRequired([username, email, password, name, password2, telefon])){
    checkLength(username, 3, 12);
    checkLength(password, 4, 20);
    checkEmail(email);
    checkName(name);
    checkNumber(telefon);
    checkPassword(password2);
  }
}

// überprüfung passwort (equal)
function checkPassword (input){
var password = document.querySelector('#password').value,
    confirmpassword = document.querySelector('#password2').value;

if (password != confirmpassword){
  showError(input, 'Passwort stimmt nicht überein');
  return false;
}
}

// überprüfung nummer
function checkNumber(input) {
  const re = /^(\+41|0041|0){1}(\(0\))?[0-9]{9}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Telefonnummer ist ungültig');
  }
}

// überprüfung name
function checkName(input) {
  const re = /^[a-z ,.'-]+$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Name soll keine Sonderzeichen und Zahlen enthalten');
  }
}

// submit button
form.addEventListener('submit', function(e) {
  e.preventDefault();
  validateForm();
});
