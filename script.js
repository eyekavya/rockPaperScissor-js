let user = document.getElementById("user");

let subBtn = document.getElementById("subBtn");

let retryBtn = document.getElementById("retryBtn");

// let randomNum = Math.floor((Math.random() * 10) / 4 + 1);
function generateRandom() {
  subBtn.disabled = true;

  let randomNo = Math.floor((Math.random() * 10) / 4 + 1);
  console.log(randomNo);

  console.log(`user: ${user.value}`);
  document.querySelector(".userChoice").innerHTML = `user: ${user.value}`;

  let random = "";

  switch (randomNo) {
    case 1:
      random = "Rock";
      break;

    case 2:
      random = "Paper";
      break;

    case 3:
      random = "Scissor";
      break;

    default:
      console.log("NA");
      break;
  }

  document.querySelector(".compChoice").innerHTML = `Computer: ${random}`;

  if (
    (user.value == "Rock" && random == "Scissor") ||
    (user.value == "Paper" && random == "Rock") ||
    (user.value == "Scissor" && random == "Paper")
  ) {
    document.querySelector(".result").innerHTML = `Yayyyy! You Won 🎉`;
  } else if (
    (user.value == "Rock" && random == "Rock") ||
    (user.value == "Paper" && random == "Paper") ||
    (user.value == "Scissor" && random == "Scissor")
  ) {
    document.querySelector(".result").innerHTML = `Oops! Match Tied 🙄`;
  } else {
    document.querySelector(".result").innerHTML = `Oh No, You Lose! 😒`;
  }

  retryBtn.style.display = "block";
}

subBtn.addEventListener("click", generateRandom);

retryBtn.addEventListener("click", () => {
  user.value = "";
  document.querySelector(".compChoice").innerHTML = "";
  document.querySelector(".result").innerHTML = "";
  document.querySelector(".userChoice").innerHTML = "";
  retryBtn.style.display = "none";
  subBtn.disabled = true;
});

user.addEventListener("change", () => {
  console.log(user.value);
  if (user.value == "") {
    subBtn.disabled = true;
  } else {
    subBtn.disabled = false;
  }

  console.log(user.value);
});
