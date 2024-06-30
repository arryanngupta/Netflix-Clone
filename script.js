console.log("let's start js");

let l = document.querySelectorAll(".doubt-section > p > i").length
//console.log(l);
for(let i = 0;i<l;i++){
    document.querySelectorAll(".doubt-section > p > i")[i].addEventListener("click",function(){
    console.log("icon was clicked");
    document.querySelectorAll(".doubt-section > .trans-para")[i].classList.toggle("active");
    if(document.querySelectorAll(".doubt-section > .trans-para")[i].classList.contains("active")){
        document.querySelectorAll(".doubt-section > p > i")[i].setAttribute("class","fa-solid fa-xmark");
    }
    else{
        document.querySelectorAll(".doubt-section > p > i")[i].setAttribute("class","fa-solid fa-plus");
    }
    })
}





