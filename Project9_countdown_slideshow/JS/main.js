function countdown() {

var seconds =document.getElementById("seconds").value ;

function tick() {

seconds=seconds-1;
timer.innerHTML =seconds ;

if (seconds > 0) {

setTimeout (tick, 1000);
}

else {

    alert("Times up");
}

}
tick();


}
