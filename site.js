
function getData() {
    document.getElementById("restaurant-list").innerText = ""
return fetch(
        "/data.json"
    ).then(
        response => response.json()
    ).then(
        jsondata => {
            console.log("path 1");
            console.log(jsondata.length)
            for(let i=0; i<jsondata.length; i++){
                restaurant = jsondata[i].restaurant;
                cuisine = jsondata[i].cuisine;
                area = jsondata[i].area;
                city = jsondata[i].city;
                console.log(i)
               value = document.getElementById("restaurant-list").innerHTML
            // document.getElementById("restaurant-list").innerHTML =restaurantVal+"&nbsp; &nbsp; &nbsp; &nbsp;"+cuisineVal+"          "+areaVal+"          "+cityVal +"<br>"+ restaurant+"          "+cuisine+"          "+area+"          "+city;
            let result = restaurant+ " "+ cuisine +" "+area 
            document.getElementById("restaurant-list").innerHTML =  result + "<br>" + value
            }
           let list =  document.getElementById("restaurant-list")
           list.style.color = "white";
           list.style.lineHeight = "200%"
         }
    );
}
document.getElementById("all-restaurants").onclick = function(){
    getData()
}



function areaf(clicked) {
    document.getElementById("restaurant-list").innerText = ""
    
return fetch(
        "/data.json"
    ).then(
        response => response.json()
    ).then(
        jsondata => {
            console.log("path 1");
            console.log(jsondata.length)
            for(let i=0; i<jsondata.length; i++){
                restaurant = jsondata[i].restaurant;
                cuisine = jsondata[i].cuisine;
                area = jsondata[i].area;
                city = jsondata[i].city;
                console.log(area)
               value = document.getElementById("restaurant-list").innerHTML
               let result = restaurant+ " "+ cuisine +" "+area 
            // document.getElementById("restaurant-list").innerHTML =restaurantVal+"&nbsp; &nbsp; &nbsp; &nbsp;"+cuisineVal+"          "+areaVal+"          "+cityVal +"<br>"+ restaurant+"          "+cuisine+"          "+area+"          "+city;
            
            if(area == clicked || cuisine == clicked){
            
                document.getElementById("restaurant-list").innerHTML =  result + "<br>" + value
            }
   
            }
           let list =  document.getElementById("restaurant-list")
           list.style.color = "white";
           list.style.lineHeight = "200%"
         }
    );
}

document.getElementById("mayfair").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 

document.getElementById("knightsbridge").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 
document.getElementById("chelsea").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 
document.getElementById("marylebone").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 

document.getElementById("greek").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 
document.getElementById("italian").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 
document.getElementById("steakhouse").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 

document.getElementById("french").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 

document.getElementById("lebanese").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 

document.getElementById("asian").onclick = function(evt){
    console.log(evt)
    areaf(evt.target.innerText)
} 













//Dropdown
$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });