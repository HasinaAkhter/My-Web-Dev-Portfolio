const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const thankYou = document.querySelector('.thank_container');
nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, messageInput];
let showThankYou = () => {
  if (isFormValid == false) {
    thankYou.classList.add('thank_container--visible');
    isFormValid = true;
  }
};
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");

    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove('hidden');
  }

});