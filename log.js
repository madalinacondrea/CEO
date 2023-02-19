function login() {
  var email = document.getElementById("email").value;
  var psw = document.getElementById("psw").value;

  if (email !== "" && psw !== "") {
    document.getElementById("bg").classList.add("logged");
    document.getElementById("message").classList.remove("hidden");
  } else {
    alert("Please insert data !");
  }
}

function reset() {
  document.getElementById("bg").classList.remove("logged");
  document.getElementById("message").classList.add("hidden");
  document.getElementById("email").value = "";
  document.getElementById("psw").value = "";
  document.getElementById("eye").innerText = "visibility_off";
}

function put_color(id_name) {
  document.getElementById(id_name).classList.add("put-color");
}

function remove_color(id_name) {
  document.getElementById(id_name).classList.remove("put-color");
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
