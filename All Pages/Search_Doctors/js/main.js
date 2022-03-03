// controlling arrows in search fields
let arrows=document.getElementsByClassName("searchItems");
let ele_arrows=document.getElementsByClassName("fa-angle-down");
for (let key in arrows) {
if(!isNaN(+key)){
    let ele=arrows[key];
    let ele_arrow=ele_arrows[key];
    let index=key;
    ele.addEventListener("click",function toggle_arrow(){ 
       for (let key in ele_arrows ){
        if(!isNaN(+key)){
            if(key!=index){
                ele_arrows[key].style.transform="";
            }
        }
       }
        ele_arrow.style.transform==""?ele_arrow.style.transform="rotate(180deg)":ele_arrow.style.transform="";
    });
}}
// ---------------------------------------------------------------


// --------------------------------------------