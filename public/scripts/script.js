//for load more button
let loadMoreBtn = document.querySelector('#load-more');
let currentItem =4;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.container2 .row .hir ')];
    for (var i = currentItem; i < currentItem +4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 4;
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display='none';
    }
}

// <!-- for slider -->

$(document).ready(function()
{

   
        if($('.bbb_viewed_slider').length)
        {
            var viewedSlider = $('.bbb_viewed_slider');

            viewedSlider.owlCarousel(
            {
                loop:true,
                margin:30,
                autoplay:true,
                autoplayTimeout:6000,
                nav:false,
                dots:false,
                responsive:
                {
                    0:{items:1},
                    575:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1199:{items:4}
                }
            });

            if($('.slider_prev').length)
            {
                var prev = $('.slider_prev');
                prev.on('click', function()
                {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.slider_next').length)
            {
                var next = $('.slider_next');
                next.on('click', function()
                {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }


    });


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}