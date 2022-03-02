

let morebtn = document.getElementById('more'),
    dots =document.getElementById('dots'),
    readLess = document.getElementById('less');

    function seeMore(){
        if(dots.style.display =="none"){
            dots.style.display = "inline";
            readLess.innerHTML="Read More";
            morebtn.style.display = "none";

        }else{
            dots.style.display = "none";
            readLess.innerHTML="Read Less"
             morebtn.style.display = "block";
        }
    }