// second block casinos slider
$('.casinos').slick({
    centerMode: true,
    centerPadding: '130px',
    slidesToShow: 7,
    autoplay: true,
    arrows: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '80px'
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                centerPadding: '30px'
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: '80px'
            }
        }
    ]
});

// sticky header
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("sticky_header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
});

// mobile menu

window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.burger_menu_icon');
    const menu = document.querySelector('.mobile_menu');
    const menuClose = document.querySelector('.close_btn');

    // hamburger.addEventListener('click', () => {
    //     menu.classList.add('menu_active');
    //     hamburger.classList.add('menu_active');
    // });

    // menuClose.addEventListener('click', () => {
    //     menu.classList.remove('menu_active');
    // });

    hamburger.addEventListener("click", function() {
        var isOpen = menu.classList.contains("open");
    
        if (isOpen) {
            menu.classList.remove("open");
            hamburger.classList.remove("menu_active");
        } else {
            menu.classList.add("open");
            hamburger.classList.add("menu_active");
        }
    });
});