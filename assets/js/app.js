
// carousel 1
jQuery(function($) {
    $('.carousel-playlist').flickity({
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      groupCells: true
    })
  });

  // carousel 2
  jQuery(function($) {
    $('.carousel-movie').flickity({
      cellAlign: 'left',
      contain: true,
      groupCells: true,
      wrapAround: true
    })
  });

// // play pause icon
// function changeIcon() {
//   var img1 = "assets/images/icons/pause.svg",
//       img2 = "assets/images/icons/play-red.svg";
//   var imgElement = document.getElementById('js-img');
//   console.log('img1', img1);
//   console.log('img2', img2);
  
//   imgElement.src = (imgElement.src === img1)? img2 : img1;
//   console.log('imgsrc', imgElement.src);
// }

// tabs in mobile
  var mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
        console.log('works');
        $('#js-tab-1').click(function() {
            $('this').$('nav-link').addClass('active');          
            $('#js-tab1').addClass('show active fade');
            $('.js-tab2').removeClass('show active').addClass('d-none');          
        });

        $('#js-tab-2').click(function() {
          $('this').$('nav-link').addClass('active');          
          $('#js-tab2').addClass('show active fade');
          $('.js-tab1').removeClass('show active').addClass('d-none');       
      });
    }

    
