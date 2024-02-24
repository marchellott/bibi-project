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
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
