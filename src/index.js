const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const date_of_birth = document.getElementById("date_of_birth");

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  addButton = document.getElementById('addButton');
  addButton.addEventListener('click', fetchUser);
});

function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => appendNewUser(json['results'][0]));
};

function appendNewUser(results) {
  fullname.textContent = `${results['name']['first']} ${results['name']['last']}`; 
  email.textContent = results['email'];
  street.textContent = results['location']['street'];
  city.textContent = results['location']['city'];
  state.textContent = results['location']['state'];
  postcode.textContent = results['location']['postcode'];
  phone.textContent = results['phone'];
  cell.textContent = results['cell'];
  date_of_birth.textContent = results['dob']['date'];
};