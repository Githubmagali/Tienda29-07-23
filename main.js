let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

navbar.onclick =()=>{

}

window.onscroll = () =>{
    navbar.classList.remove('active');
}