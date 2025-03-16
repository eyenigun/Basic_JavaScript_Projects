

function count_to_Ten() {

var Digit="";
var x=1;
while (x<11) {
Digit +="<br>" +x ;
x++ ;

}
document.getElementById("Counting_to_Ten").innerHTML=Digit;

}



// for Loop
var Instruments = [Guitar, Drums, Piano, Bass];
var content="";
var y;

function for_Loop() {

    for (y=0, y<Instruments.length; y++ ;) {

        content += Instruments[y] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = content;
}