function check() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var email = document.getElementById("email").value;
  var psw = document.getElementById("psw").value;

  if (
    name !== "" &&
    surname !== "" &&
    day !== "" &&
    month !== "" &&
    year !== "" &&
    email !== "" &&
    psw !== ""
  ) {
    document.getElementById("title").innerText = `Programarea a fost realizată, ${name}!`;
    document.getElementById("bg").classList.add("registered");
  } else {
    alert("Please insert data !");
  }
}

function view_psw() {
  let eye = document.getElementById("eye").innerText;

  if (eye === "visibility_off") {
    document.getElementById("eye").innerText = "visibility";
    document.getElementById("psw").type = "";
  } else if (eye === "visibility") {
    document.getElementById("eye").innerText = "visibility_off";
    document.getElementById("psw").type = "password";
  }
}

function reset() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("day").value = "";
  document.getElementById("month").vaue = "";
  document.getElementById("year").value = "";
  document.getElementById("email").value = "";
  document.getElementById("psw").value = "";
  document.getElementById("eye").innerText = "visibility_off";
  document.getElementById("bg").classList.remove("registered");
  document.getElementById("title").innerText = "REGISTRATION";
}
