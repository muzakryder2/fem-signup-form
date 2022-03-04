const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

// Error Icon
const fnImgIcon = document.createElement("img");
fnImgIcon.classList.add("error--icon");
fnImgIcon.src = "./images/icon-error.svg";

const lnImgIcon = document.createElement("img");
lnImgIcon.classList.add("error--icon");
lnImgIcon.src = "./images/icon-error.svg";

const eImgIcon = document.createElement("img");
eImgIcon.classList.add("error--icon");
eImgIcon.src = "./images/icon-error.svg";

const pImgIcon = document.createElement("img");
pImgIcon.classList.add("error--icon");
pImgIcon.src = "./images/icon-error.svg";

// Error Messages
let pFirstName = document.createElement("p");
pFirstName.innerHTML = "First Name cannot be empty";
pFirstName.classList.add("error--text");

let pLastName = document.createElement("p");
pLastName.innerHTML = "Last Name cannot be empty";
pLastName.classList.add("error--text");

let pEmailEmpty = document.createElement("p");
pEmailEmpty.innerHTML = "Email cannot be empty";
pEmailEmpty.classList.add("error--text");

let pEmailWrong = document.createElement("p");
pEmailWrong.innerHTML = "Looks like this is not an email";
pEmailWrong.classList.add("error--text");

let pPassword = document.createElement("p");
pPassword.innerHTML = "Password cannot be empty";
pPassword.classList.add("error--text");

// Submit - Check Inputs. When all inputs pass, disable inputs and button.
// Change button text to Thank You and mask password
const onSubmit = (evt) => {
  evt.preventDefault();
  const isFirstName = checkFirstName();
  const isLastName = checkLastName();
  const isEmail = checkEmail();
  const isPassword = checkPassword();
  if (isFirstName && isLastName && isEmail && isPassword) {
    submitBtn.innerHTML = "Thank You!";
    submitBtn.disabled = "disabled";
    fName.children[0].disabled = "disabled";
    lName.children[0].disabled = "disabled";
    email.children[0].disabled = "disabled";
    password.children[0].value = "*".repeat(password.children[0].value.length); //mask password
    password.children[0].disabled = "disabled";
  }
};

// onClick event listener
submitBtn.addEventListener("click", onSubmit);

// CheckInput Functions - If input is empty or email is in the wrong format, display error
// text, border, and icon. Otherwise reset previous errors.
const checkFirstName = () => {
  const textInput = fName.children[0];

  if (!textInput.value) {
    textInput.classList.add("error");
    textInput.after(fnImgIcon);
    textInput.after(pFirstName);
    return false;
  }
  textInput.classList.remove("error");
  pFirstName.remove();
  fnImgIcon.remove();
  return true;
};

const checkLastName = () => {
  const textInput = lName.children[0];
  if (!textInput.value) {
    textInput.classList.add("error");
    textInput.after(lnImgIcon);
    textInput.after(pLastName);
    return false;
  }
  textInput.classList.remove("error");
  pLastName.remove();
  lnImgIcon.remove();
  return true;
};

const checkEmail = () => {
  const textInput = email.children[0];
  if (!textInput.value) {
    pEmailWrong.remove();
    textInput.classList.add("error");
    textInput.after(eImgIcon);
    textInput.after(pEmailEmpty);
    return false;
  }

  // Check for valid email address format
  if (!textInput.value.match(/^\S+@\S+\.\S+$/)) {
    pEmailEmpty.remove();
    textInput.classList.add("error");
    textInput.after(eImgIcon);
    textInput.after(pEmailWrong);
    return false;
  }

  textInput.classList.remove("error");
  pEmailWrong.remove();
  pEmailEmpty.remove();
  eImgIcon.remove();
  return true;
};

const checkPassword = () => {
  const textInput = password.children[0];
  if (!textInput.value) {
    textInput.classList.add("error");
    textInput.after(pImgIcon);
    textInput.after(pPassword);
    return false;
  }
  textInput.classList.remove("error");
  pPassword.remove();
  pImgIcon.remove();
  return true;
};
