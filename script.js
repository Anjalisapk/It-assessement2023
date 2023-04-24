let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active')
}


let searchForm= document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


window.onscroll=() =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fname = form.elements.fname.value;
    const lname = form.elements.lname.value;
    const email = form.elements.email.value;
    const number = form.elements.number.value;
    const message = form.elements.message.value;

    // TODO: validate form data and send to server-side script
});

