// alert("Hi welcome to Java script tutorial");

function validate() {
    var uname = document.getElementById("uname");
    var pass = document.getElementById("pass");
    if (uname.value.trim() == "") {
      uname.style.border = "solid 3px red";
      document.getElementById("user").style.visibility = "visible";
      return false;
    } else if (pass.value.trim() == "") {
      pass.style.border = "solid 3px red";
      document.getElementById("password").style.visibility = "visible";
      return false;
    } else if (pass.value.trim().length < 5) {
      pass.style.border = "solid 3px red";
      document.getElementById("shorts").style.visibility = "visible";
      return false;
    } else {
      return true;
    }
  }
  