const inputs = document.querySelectorAll(".input");
let btnclear =document.getElementById("but"); 

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
function clickbut(){
 btnclear.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
}); 
}

// return to home page 

// function redirectToFile(event) {
//   event.preventDefault(); // Prevent form submission
//   window.location.href = "index.html"; // Replace with the actual file path
// }




// function sendEmail(){
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "f3bb9086-3e57-4c96-9291-62643101d9c0",
//     Password : "ziadrami04",
//     To : 'z.rami2004@gmail.com',
//     From :document.getElementById("email").value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
//   }).then(
//   message => alert("zaid")
//   );
// }