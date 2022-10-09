var errorMsg = document.getElementById("errorMsg")
errorMsg.style.color = "red"

function validateForm(){
  var myform = document.forms["contact-us"]
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var male = document.getElementById("male").checked
  var female = document.getElementById("female").checked
  var branch = document.getElementById("branch").value
  var message = document.getElementById("message").value

  if(name == "" || email == "" || message == ""){
    errorMsg.innerHTML = "Please fill all fields!"

    return false
  }else if(email.indexOf("@") == -1 || email.indexOf("@") == 0 || !email.endsWith(".com")){
    errorMsg.innerHTML = "Please use the correct email format!"

    return false
  }else if(male == false && female == false){
    errorMsg.innerHTML = "Please choose your gender!"

    return false
  }else if(branch == "null"){
    errorMsg.innerHTML = "Please choose our Danbam branch!"

    return false
  }

}