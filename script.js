const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());

  if (name === "" || isNaN(age)) {
    alert("Please enter valid details");
  } else {
    let promise = new Promise((resolve, reject) => {
      if (age > 18) {
        setTimeout(() => {
          resolve(`Welcome, ${name}. You can vote.`);
        }, 4000);
      } else {
        setTimeout(() => {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }, 4000);
      }
    });

    promise
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  }
});
