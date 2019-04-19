$(function(){

	//wow animation
	new WOW().init();

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items:4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
			938:{
				items:4
			}
	    }
	});




	var skillSectionTop = $(".skillSection").offset().top;
	$(window).scroll(function(){
		if(window.pageYOffset > skillSectionTop - $(window).height() + 100){
			$('.chart').easyPieChart({
		           easing: "easeInOut",
				   barColor: "#fff",
				   trackColor: false,
				   scaleColor: false,
				   lineWidth: 4,
				   size:152,
				   onStep: function(from, to, currentValue){
					   $(this.el).find(".percent").text(Math.round(currentValue));
				   }
		    });
		}
	});


});
