
function getData(location) {
    document.getElementById("restaurant-list").innerText = ""
return fetch(
        "/data.json"
    ).then(
        response => response.json()
    ).then(
        jsondata => {
            console.log("path 1");
            for(let i=0; i<jsondata.length; i++){
                result = jsondata[i].restaurant;
                console.log(result)
               value = document.getElementById("restaurant-list").innerText 
            document.getElementById("restaurant-list").innerText = value + result;


            }
         }
    );
}


function rollDice(){
    const times = 1000;
    let sum = 0;
    for(let i=0; i<times; i++){
        let res = Math.floor(Math.random() * 6) + 1
        sum += res
    console.log(res)
    
 }
 console.log("final result"+sum)
 document.getElementById("result").innerHTML = sum + "   "+ sum/times



}
document.querySelector('button').onclick = function(){
    rollDice()
}




document.getElementById("getData").onclick = function(){
    getData()
}