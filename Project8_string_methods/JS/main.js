

// Utilizing .concat
function full_sentence() {

    var part_1="Guess what day";
     var part_2="it is ...";
      var part_3="April Fools ";
       var whole_sentence=part_1.concat(part_2,part_3);
       document.getElementById("StringMethod").innerHTML=whole_sentence;

}


//Utilizing
function slice_Method(){

    var sentence= "Slice and Dice";
    var section = sentence.slice(10,14);
    document.getElementById("StringMethod").innerHTML=section;

}


//Utilizing .toString
function string_Method(){

var myNumber=999;
document.getElementById("ToString").innerHTML=myNumber.toString();

}

//Utilizing .toPrecision
function precision_method(){
    var myNumber=999.34235235553253;
    document.getElementById("SpecificLength").innerHTML=myNumber.toPrecision(5)

}