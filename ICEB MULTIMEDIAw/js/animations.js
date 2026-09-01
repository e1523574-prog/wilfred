const reveals=document.querySelectorAll(

".fade-up,.zoom,.slide-left,.slide-right,.rotate"

);

function reveal(){

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const height=window.innerHeight;

if(top<height-120){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();
