let searchBar = document.querySelector(".search-bar-container");
let searchBtn = document.querySelector("#searchBtn");

    window.onscroll = () => {
        searchBtn.classList.remove('fa-times');
        searchBar.classList.remove('active');          
    }

    searchBtn.addEventListener('click',() => {
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');                
    })

let openBtn = document.querySelector('#loginBtn');
let formBox = document.querySelector('.login-form-container');
let closeBtn = document.querySelector('#formClose');

    openBtn.addEventListener('click', () => {
        formBox.classList.add("active");
    });
    closeBtn.addEventListener('click', () => {
        formBox.classList.remove("active");
    })

let navBtn = document.querySelector('#menuBar');
let navbar = document.querySelector('.navbar');

    navBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    })

let vidBtn = document.querySelectorAll(".vidBtn");

    vidBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.Controls .active').classList.remove('active');
            btn.classList.add('active');

            let src = btn.getAttribute('data-src');
            let animate = document.querySelector('#vidSlider').src = src;
        })
    })

    var swiper = new Swiper(".review-slider",{
        spaceBetween: 50,
        loop: true,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        braekpoints: {
            640:{
                slidesPerView : 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024 : {
                slidesPerView : 3,
            },
        },
    });

    var swiper = new Swiper(".brand-slider",{
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        braekpoints: {
            450:{
                slidesPerView : 2,
            },
            768: {
                slidesPerView: 3,
            },
            991 : {
                slidesPerView : 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });