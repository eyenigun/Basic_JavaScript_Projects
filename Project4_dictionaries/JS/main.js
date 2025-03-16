
function my_Dictionary () {
  var   movie= {
//Dictionary
title: "In the woods",
genre: "Horror",
director: "Erhan Yenigun",

  } ;

  delete movie.director
  document.getElementById("Dictionary").innerHTML =movie.director ;
}

