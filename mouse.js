
    function enlargeImage(id) {
        //pseudo-code = Discription of whats happening
        //1. get the image for enlargment byID?
        //2. get width or height 
        //3. multiply value 200%? etc 
        //4. Assign new value back to the images
        console.log("<<<Bigger>>>")
      const myImg = document.getElementById(id);
    let el =document.getElementById(id)
    let ele = "column-"+el.id
    let div = document.getElementById(ele)
    div.style.border = "solid"+" green" + " 10px"
    }
    function resizeImage(id) {
        //pseudo-code = Discription of whats happening
        //1. get the image for enlargment byID?
        //2. get width or height 
        //3. multiply value 200%? etc 
        //4. Assign new value back to the images
        console.log("<<<Bigger>>>")
      const myImg = document.getElementById(id);
    let el =document.getElementById(id)
    let ele = "column-"+el.id
    let div = document.getElementById(ele)
    div.style.border = ""
    }
    // function resizeImage(id) {
    //     console.log(">>>Smaller<<<")
    //   const myImg = document.getElementById(id);
    // let w = myImg.height;
    // console.log(w)
    // w = w / 1.5;
    // myImg.height = w
    // console.log(w)
    // }
    document.getElementById("thai-pic").onmouseover = function () {
        enlargeImage("thai-pic");
    }
    document.getElementById("thai-pic").onmouseout = function () {
        resizeImage("thai-pic");
    }

    document.getElementById("indo-pic").onmouseover = function () {
        enlargeImage("indo-pic");
      }
    document.getElementById("indo-pic").onmouseout = function () {
        resizeImage("indo-pic");
      }

    // document.getElementById("beaver").onmouseover = function () {
    //     enlargeImage("beaver");
    //   }
    // document.getElementById("beaver").onmouseout = function () {
    //     resizeImage("beaver");
    //   }
    function burgerChange(){
        console.log("starting")
        document.querySelector(".overlay").style.display = "inline-block"
      }
      function burgerChangeBack(){
        console.log("change back")
        document.querySelector(".overlay").style.display = "none"
      }

    document.getElementById("burger").onclick = function(){
        burgerChange()
      }
      document.getElementById("burger-in").onclick = function(){
        burgerChangeBack()
      }





