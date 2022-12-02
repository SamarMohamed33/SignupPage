document.getElementById("signin-btn").onclick = function flipme() {
  document.getElementById("left").classList.toggle("flipped");
  document.getElementById("right").classList.toggle("flipped");
};
document.getElementById("signup-btn").onclick = function flipme() {
  document.getElementById("left").classList.toggle("flipped");
  document.getElementById("right").classList.toggle("flipped");
};

let loginName = document.getElementById("name");
let loginPass = document.getElementById("password");
let loginBtn = document.getElementById("signin-submit");

loginBtn.addEventListener("click", function (event) {
  let nameValid = false;
  let passwordValid = false;
  if (loginName.value !== "") {
    nameValid = true;
  }
  if (loginPass.value !== "") {
    passwordValid = true;
  }
  if (nameValid === false || passwordValid === false) {
    document.getElementById("valid").innerHTML =
      "username or password is incorrect";
    event.preventDefault();
  }
});

let signupUserName = document.getElementById("user-name");
let signupEmail = document.getElementById("user-email");
let signupPass1 = document.getElementById("user-pass1");
let signupPass2 = document.getElementById("user-pass2");
let signupBtn = document.getElementById("signup-submit");

let signupUserNameValue = document.getElementById("user-name").value.trim();
let signupEmailValue = document.getElementById("user-email").value.trim();
let signupPass1Value = document.getElementById("user-pass1").value.trim();
let signupPass2Value = document.getElementById("user-pass2").value.trim();

var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
signupBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let signupUserNameValue = document.getElementById("user-name").value.trim();
  let signupEmailValue = document.getElementById("user-email").value.trim();
  let signupPass1Value = document.getElementById("user-pass1").value.trim();
  let signupPass2Value = document.getElementById("user-pass2").value.trim();

  if (signupUserNameValue == "") {
    setError("Username is required", signupUserName);
  } else if (signupUserNameValue.length < 2) {
    setError("Too short", signupUserName);
  } else if (signupUserNameValue.length > 35) {
    setError("Too long", signupUserName);
  } else {
    success(signupUserName);
  }
  if (!signupEmailValue.match(emailformat)) {
    setError("Provide a valid email address", signupEmail);
  } else {
    success(signupEmail);
  }

  if (signupPass1Value == "") {
    setError("Password is required", signupPass1);
  } else {
    success(signupPass1);
  }

  if (signupPass2Value == "") {
    setError("Please confirm your password", signupPass2);
  } else if (signupPass2Value !== signupPass1Value) {
    setError("Password doesn't match", signupPass2);
  } else {
    success(signupPass2);
  }
});

function setError(errorMessage, Element) {
  let parent = Element.parentElement;
  console.log(parent);
  parent.querySelector(".error").innerHTML = errorMessage;
  parent.querySelector("input").style = `border: 2px solid rgb(255, 51, 51);`;
}
function success(Element) {
  let parent = Element.parentElement;
  parent.querySelector(".error").innerHTML = "";
  parent.querySelector("input").style = `border: none;`;
}
