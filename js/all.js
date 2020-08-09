function myFunction() {
  alert("Your email has been succesfully submitted!");
}
function myFunction1() {
  alert("Your query has been succesfully recieved!");
}
function validateForm1(){
    var a = document.forms["myForm1"]["eml"].value;
    if (a == "") {
      alert("Email must be filled out");
      return false;
    }
    else
      return myFunction();
}
