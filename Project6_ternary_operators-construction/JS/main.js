

function Ride_Function () {
  var Height, Can_Ride ;
Height= document.getElementById("Height").value ;
Can_Ride= (Height < 52) ? "Too short": "Tall enough"
document.getElementById("Ride").innerHTML=Can_Ride + "to ride";
  } 



  function Vehicle(Make, Model, Year, Color) {

this.Vehicle_Make=Make;
this.Vehicle_Model=Model;
this.Vehicle_Year=Year;
this.Vehicle_Color=Color;

  }

  var Jack=new Vehicle("Dodge", "Viper", 2020, "red");
  var Emily=new Vehicle("Jeep", "Hawk", 2019, "White");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML=
  Jack.Vehicle_Color +
  Jack.Vehicle_Make +
  Jack.Vehicle_Model +
  Jack.Vehicle_Year
}



function add_Strings() {
  var start_string="Hello";

   function Adding(str) {
    start_string=start_string+ "  "+ str;

   }
   Adding("World");
   document.getElementById("Nested_Function").innerHTML=start_string ;
}