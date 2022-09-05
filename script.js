const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const mail = document.getElementById("mail");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateDefault();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

const isValidEmail = (email) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validRegex.test(String(email).toLowerCase());
};

const validateDefault = () => {
  const usernameValue = username.value.trim();
  const lastnameValue = lastname.value.trim();
  const mailValue = mail.value.trim();

  if (usernameValue.length < 2) {
    setError(username, "სახელი უნდა შედგებოდეს მინიმუმ 2 ასოსგან.");
  } else {
    setSuccess(username, "");
  }

  if (lastnameValue.length < 2) {
    setError(lastname, "გვარი უნდა შედგებოდეს მინიმუმ 2 ასოსგან.");
  } else {
    setSuccess(lastname, "");
  }

  if (mailValue === "") {
    setError(mail, "მეილის გრაფა ცარიელია.");
  } else if (!isValidEmail(mailValue)) {
    setError(mail, "მეილის გრაფა არასწორია.");
  } else {
    setSuccess(mail, "");
  }
};
