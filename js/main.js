let domenText = document.querySelector('#domenText');
let domenValue = document.querySelector('#domenValue');
let count = 0;

$(document).ready(function(event) {
    $( "#button" ).click(function(event){
    	if (domenText.innerHTML == domenValue.value && domenValue.value != '') {
	     	$('.direction-header-blocks-domen-form').css({border: '1px solid red'});
	     	$('.error_2').css('display', 'block');
	     	$('.error_1').css('display', 'none');
	     	$(this).stop();
     } else if (domenValue.value == '') {
     	$('.error_1').css('display', 'block');
     	$('.error_2').css('display', 'none');
		$('.direction-header-blocks-domen-form').css({border: '1px solid red'});
		$(this).stop();
     } else {
     	$('.error_2').css('display', 'none');
	    $('.error_1').css('display', 'none');
     	domenText.innerHTML = domenValue.value;
     	if (count == 0) {
     		$( ".direction-header-blocks-domen-text" ).slideToggle();
     	}
	    $('.direction-header-blocks-domen-form').css({border: 'none'});
	    count++;
     }
    
    });
});

 let tabsHeader = document.querySelector('.direction-main-blocks-amenities');
 let tabsHeader_1 = document.querySelector('.ametities-block_2');
 let tabsText = document.querySelector('.tabsText_1');
 let tabsText_1 = document.querySelector('.tabsText_2');

 	  initTabs(tabsHeader, tabsText);
      initTabs(tabsHeader_1, tabsText_1);

      function initTabs(tabsHeader, tabsText) {
        var tabLinks = tabsHeader.querySelectorAll('[data-number]');
        var tabsTexts = tabsText.querySelectorAll('[data-number]');

        addNumbers(tabLinks);
        addNumbers(tabsTexts);

        for (var i = 0; i < tabLinks.length; i++) {
          tabLinks[i].addEventListener('click', function() {
            deactivateElem(findActivateElem(tabsHeader));
            deactivateElem(findActivateElem(tabsText));

            activateElem(this);
            var tabForActivation = findTabForActivation(tabsText, this.dataset.number);
            activateElem(tabForActivation);
          });
        }
      }

      function addNumbers(elems) {
        for (var i = 0; i < elems.length; i++) {
          elems[i].dataset.number = i;
        }
      }

      function activateElem(elem) {
        elem.classList.add('active');
      }

      function findActivateElem(parent) {
        return parent.querySelector('.active');
      }

      function deactivateElem(elem) {
        elem.classList.remove('active');
      }

      function findTabForActivation(parent, number) {
        return  parent.querySelector('[data-number="' + number + '"]')
      }

$('.directions').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed:2000,
        autoplay:false,
        pauseOnHover:true,
        pauseOnDotsHover:true,
      swipeToSlide: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
         {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        }

    ]
});





