// Button click shows Celcius
function toCelsius(f) {
 return (5/9) * (f-32);
}


let value = toCelsius(77);
document.getElementById("demo").innerHTML = value;


// Function to change  text 
function changeMessage() {
  myname = "Erhan";  // First variable
  surname = "Yenigun";  // Second variable

  // Update the HTML element with new text and concatenation
  document.getElementById("message").innerText = myname + " " + surname + "!";
}
