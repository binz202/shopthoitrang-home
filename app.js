// slider
function animateOnLoad() {
  var textItems = document.querySelectorAll(".text-slide h2, .text-slide p, .text-slide a");
  textItems.forEach(function(textItem, index) {
      textItem.style.animationDelay = index * 200 + "ms";
      textItem.style.animationName = "slideInDown";
  });
}

// Bắt sự kiện khi tải lại trang  
window.onload = function() {
  animateOnLoad();
};

// Bắt sự kiện khi click vào nút "Next"
document.querySelector(".carousel-control-next").addEventListener("click", function() {
  animateOnLoad();
});

// Bắt sự kiện khi click vào nút "Previous"
document.querySelector(".carousel-control-prev").addEventListener("click", function() {
  animateOnLoad();
});
// slider
$(document).ready(function(){
  // Initialize Slick Carousel
  $(' .block-color').slick({
    arrows: false,
    infinite: true, //nhấn next vô hạn
    draggable:false
  });

  // Handle button clicks
  $('.green-btn').on('click', function(){
    // Change the image to green shirt
    $(' .block-color').slick('slickGoTo', 1); // Assuming the green shirt is at index 1
  });

  $('.yellow-btn').on('click', function(){
    // Change the image to yellow shirt
    $(' .block-color').slick('slickGoTo', 2); // Assuming the yellow shirt is at index 2
  });

  $('.red-btn').on('click', function(){
    // Change the image to red shirt
    $(' .block-color').slick('slickGoTo', 3); // Assuming the red shirt is at index 3
  });
});


$('.block-product_2').slick({ // product-2
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 2,
  arrows: true,
  draggable: false,
  nextArrow:`<button type='button' class='slick-next pull-right'><i class="fi fi-br-angle-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  draggable: false
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  draggable: false,
  focusOnSelect: true
});// end item 3





$('.slider-for_4').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  draggable: false,
  asNavFor: '.slider-nav_4'
});
$('.slider-nav_4').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for_4',
  dots: false,
  centerMode: true,
  draggable: false,
  focusOnSelect: true
});// end item 4






$('.slick-comment').slick({ // comment
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 4,
  arrows: true,
  draggable: false,
  nextArrow:`<button type='button' class='slick-next pull-right'><i class="fi fi-br-angle-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


function selectGender(gender) {
  const genderToggle = document.querySelector('.gender-toggle');
  genderToggle.classList.toggle('selected');

  const maleLabel = document.querySelector('.male-label');
  const femaleLabel = document.querySelector('.female-label');
  const slider = document.querySelector('.slider');

  if (gender === 'male') {
    maleLabel.style.color = 'white';
    femaleLabel.style.color = 'blue';
    slider.style.backgroundColor = 'white';
    slider.style.left = '140px';
  } else if (gender === 'female') {
    femaleLabel.style.color = 'white';
    slider.style.backgroundColor = 'blue';
    slider.style.left = '0';
  }
}
// end product-2

$('.slick-pro3').slick({ // product-3
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:`<button type='button' class='slick-next pull-right'><i class="fi fi-br-angle-right"></i></button>`,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//marque
var marquee = document.querySelector('.left');

marquee.addEventListener('mouseover', function () {
    marquee.stop();
});

marquee.addEventListener('mouseout', function () {
    marquee.start();
});



const scrollMenu = document.querySelector('.hidden');
let isMenuVisible = false;

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 592) {
        // Nếu cuộn xuống và vị trí hiện tại lớn hơn 592, hiển thị menu
        if (!isMenuVisible) {
            scrollMenu.classList.add('menu-visible');
            isMenuVisible = true;
        }
    } else {
        // Nếu cuộn lên hoặc vị trí hiện tại nhỏ hơn hoặc bằng 592, ẩn menu
        if (isMenuVisible) {
            scrollMenu.classList.remove('menu-visible');
            isMenuVisible = false;
        }
    }
});



// Lưu vị trí cuối cùng của thanh cuộn trang trước đó
var lastScrollTop = 0;

// Bắt sự kiện cuộn chuột
window.addEventListener("scroll", function() {
  // Lấy vị trí cuộn chuột hiện tại
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Kiểm tra hướng cuộn chuột
  if (scrollTop > lastScrollTop) {
    // Cuộn chuột xuống, ẩn các phần tử
    // TODO: Thực hiện ẩn các phần tử tương ứng
  } else {
    // Cuộn chuột lên, hiển thị lại các phần tử
    // TODO: Thực hiện hiển thị lại các phần tử tương ứng
  }

  // Cập nhật vị trí cuối cùng của thanh cuộn
  lastScrollTop = scrollTop;
});



