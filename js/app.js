$(document).ready(function() {
	$('body').hide();
});


$(window).load(function() {
	$('body').show();
	callAnimation();
	function callAnimation() {
		setTimeout(function() {
			appShow(".mobile-scanner-table", 1500, 1, function(){
				 $('.steps').css('opacity',0);
				 $('.mobile-update-arrow').removeClass('blink-arrow');
				 $(".mobile-admin-Time-Entry, .mobile-admin-text").css('opacity', 0);
			});
			appShow(".mobile-scanner-screen-1", 1500, 1, function(){
				appShow(".mobile-scanner-id-card", 1500, 1, function(){
					appShow(".step-1", 600, 1, function(){});
					appShow(".mobile-scanner-hand-tab", 0, 1, function(){
						setTimeout(function() {
							$(".mobile-scanner-hand-tab").addClass('mobile-scanner-hand-tab-click');
							appShow(".step-2", 600, 1, function(){});
							setTimeout(function() {
						  		$(".mobile-scanner-hand-tab").removeClass('mobile-scanner-hand-tab-click');
						  		setTimeout(function() {
						  			$(".mobile-scanner-screen-2").css('opacity', 1);
						  			appShow(".step-3", 600, 1, function(){});
						  			appShow(".mobile-scanner-screen-1", 600, 0, function(){
						  				$(".mobile-scanner-id-card").animate({
											left: '130px'
										  }, 700, function() {									  	
										  });
						  				setTimeout( function() {
						  					appShow(".step-4", 600, 1, function(){});
						  					$(".mobile-scanner-screen-3").css('opacity', 1);
						  					appShow(".mobile-admin-Time-Entry", 600, 1, function(){});
										  	appShow(".mobile-scanner-screen-2", 600, 0, function(){});
										  	$('.mobile-update-arrow').addClass('blink-arrow');
						  				}, 1200);
						  				setTimeout(function() {
						  					$(".mobile-scanner-id-card").animate({
												left: '0px'
											  }, 700, function() {
											  	
											  });
										  	appShow(".mobile-admin-text", 600, 1, function(){});
										  	appShow(".mobile-admin-button", 600, 1, function(){});
						  					setTimeout(function() {
						  						$(".mobile-scanner-screen-1").css('opacity', 1);
						  						$(".mobile-scanner-screen-2, .mobile-scanner-screen-3").css('opacity', 0);
						  					}, 1200);
						  					setTimeout(function() {						  						
						  						callAnimation()
						  					}, 6000);
						  				},2000);
						  			});
						  		}, 1400);
						  	}, 1400);
							/*setTimeout(function() {
								$( ".mobile-scanner-hand-tab" ).animate({
									bottom: '-3px'
								  }, 500, function() {
								  	setTimeout(function() {
									  	$(".mobile-scanner-hand-tab").animate({
											bottom: '0px'
										  }, 300, function() {
										  	
										  });
									  	setTimeout(function() {
									  		$(".mobile-scanner-hand-tab").removeClass('mobile-scanner-hand-tab-click');
									  	}, 600)
								  	},300)
								  });
							},1000);*/
						}, 2000);
					});
				});
			});
		}, 1000);
	}

	function appShow(element, timeValue, opacity, callback) {
		$(element).fadeTo( timeValue , opacity, function() {
	    	callback();
	  	});
	}

});