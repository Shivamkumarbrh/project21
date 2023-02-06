const slideBar = document.querySelector('.slideMobileContainer');

let openSlide = function (){
    slideBar.style.display = 'block';
}
let closeSlide = function (){
    slideBar.style.display = 'none';
}
let nav = ()=>{
    if(slideBar.style.display == 'block'){
        slideBar.style.display = 'none';
    }
    else{
        slideBar.style.display = 'block';
    }
}