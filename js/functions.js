jQuery.noConflict();
(function($){

	var scroll;
	$(document).ready(function(){
		background_image_breakpoints();
		mobile_heights();
		toggle_elements();
		sticky_header();
		youtube_video();
		self_hosted_video();
		swiper_sliders();
		google_map();
		service_init();
		team_init();
		technology_init();
		testimonials_init();
		// phone_popup_init(); // Commented out - phone popup widget removed
		faq_toggle();
		custom_cursor();
		smooth_scroll();
		page_transition();
		init_scroll_animations();
		init_image_animations();
 	})
	$(window).resize(function () {
        background_image_breakpoints();
		swiper_sliders();
	})
	$(window).scroll(function () {
        sticky_header();
		windowAppearance();
	})

	function page_transition(){
		$('[data-scroll]').addClass('appearance');
		setTimeout(function () {
            $('.site-transition').addClass('leaving')
            windowAppearance();
        }, 1000)
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 800)
        //leaving animation
        var url = document.location.origin;
        $('body').on('click', 'a[href^="' + url + '"]:not([target="_blank"])', function (e) {
            e.preventDefault();
            if($(this).hasClass('ajax-link'))return;
            $('.site-transition').removeClass('leaving')
            var link = $(this).attr('href');
            $('body').removeClass('loaded');
            setTimeout(function () {
                windowAppearance();
                window.location.href = link;
            }, 400)
        });
        //safari fix
        $(window).bind("pageshow", function (event) {
            if (event.originalEvent.persisted) siteTransition();
        });  
	}	    
	function windowAppearance() {
        var sT, sB;
        var wT = $(window).scrollTop();
        var wH = window.innerHeight;
        var wB = wT + wH;
        $(".appearance").each(function () {
            sT = $(this).offset().top;
            sB = $(this).height() + sT;
            if ((wT < sB) && (wB > sT)) {
                if (!$(this).hasClass('is-inview')) $(this).addClass('is-inview');
            }
        })
    }
	function smooth_scroll(){
		$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			event.preventDefault();
			if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 	&&  location.hostname == this.hostname ) {
				hash = $(this.hash);
				target = hash.length ? hash : $(hash);
				if (!target.length) return;
				offset = target.offset().top
				margin = (window.innerWidth < 700) ? 80 : false;
				total = offset - margin;
				$('html, body').animate({
					scrollTop: total
				}, 1000);			
			}
		});
	}		
	function sticky_header(){
		var st = $(window).scrollTop();
		var lastScrollTop = 0;
		var delta = 5;

		if(Math.abs(lastScrollTop - st) <= delta) return;

		if(st > lastScrollTop && st > 80){
			// Scroll Down
			$('.site-header').addClass('hide');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('.site-header').removeClass('hide');
			}
		}

		lastScrollTop = st;

		if(st > 80 && !$('.site-header').hasClass('is-sticky')) {
			$('.site-header').addClass('is-sticky');
			$('body').addClass('sticky-header');
		}
		if(st < 80){
			 $('.site-header').removeClass('is-sticky');
			 $('body').removeClass('sticky-header');
		}
	}

	function toggle_elements(){
		var focusableElements;
		var firstFocusableElement;
		var lastFocusableElement;
		
		// Function to close mobile menu
		function closeMobileMenu(){
			$('body').removeClass('active-menu').css('overflow', '');
			$('.menu-toggle').removeClass('active').attr('aria-expanded', 'false');
			$('.mobile-menu-overlay').removeClass('active');
			$('.menu-toggle').focus();
		}
		
		// Function to open mobile menu
		function openMobileMenu(){
			$('body').addClass('active-menu').css('overflow', 'hidden');
			$('.menu-toggle').addClass('active').attr('aria-expanded', 'true');
			$('.mobile-menu-overlay').addClass('active');
			
			// Set up focus trap
			setTimeout(function(){
				focusableElements = $('.mobile-menu-overlay').find('a, button').filter(':visible');
				firstFocusableElement = focusableElements.first();
				lastFocusableElement = focusableElements.last();
				$('.mobile-menu-close').focus();
			}, 100);
		}
		
		// Hamburger toggle
		$('.menu-toggle').on('click',function(e){
			e.preventDefault();
			e.stopPropagation();
			
			var isActive = $('.mobile-menu-overlay').hasClass('active');
			
			if(isActive){
				closeMobileMenu();
			}else{
				openMobileMenu();
			}
		})
		
		// Close button
		$('.mobile-menu-close').on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			closeMobileMenu();
		})
		
		// Close mobile menu when clicking overlay background
		$('.mobile-menu-overlay').on('click', function(e){
			if(e.target === this){
				closeMobileMenu();
			}
		})
		
		// Close menu when clicking on a link
		$('.mobile-menu-overlay').on('click', 'a', function(){
			closeMobileMenu();
		})
		
		// ESC key to close menu
		$(document).on('keydown', function(e){
			if(e.key === 'Escape' && $('.mobile-menu-overlay').hasClass('active')){
				closeMobileMenu();
			}
		})
		
		// Focus trap for accessibility
		$('.mobile-menu-overlay').on('keydown', function(e){
			if(!$('.mobile-menu-overlay').hasClass('active')) return;
			
			if(e.key === 'Tab'){
				if(e.shiftKey){
					// Shift + Tab
					if(document.activeElement === firstFocusableElement[0]){
						e.preventDefault();
						lastFocusableElement.focus();
					}
				}else{
					// Tab
					if(document.activeElement === lastFocusableElement[0]){
						e.preventDefault();
						firstFocusableElement.focus();
					}
				}
			}
		})
	}
	function mobile_heights(){
		if(window.innerWidth < 1025){
			$('.full-height').css('height', window.innerHeight+'px');
		}		
	}			
	function swiper_sliders(){
		if(!$('.swiper-container').length)return;
		//site slider
		if($('.site-slider').length){
			var count = 0;
			var countSliders = -1;
			var countClasses = 0;
			var swiperSliderBg = {};
			var swiperSliderFg = {};
			var interleaveOffset = 1;
			var speed = 1000;
			var delay = 3000;
			var settings;
			var philosphy = false;
			$('.site-slider').each(function(){
				countSliders++;		
				$(this).addClass('wrapslider-'+countSliders).attr('slider',countSliders);
				//backgrounds		
				if($(this).find('.background-slider').length){
					$(this).find('.background-slider').addClass('slider-'+countSliders).attr('innerslider-'+countSliders);
					settings = {
					  loop: false,
					  slidesPerView: 1,
					  speed: speed,
					  grabCursor: false,
					  allowTouchMove: false,
					  mousewheelControl: false,
					  keyboardControl: false,
					  navigation: false,
					 	pagination : false,
					  watchSlidesProgress: true,
					  init:false,
					  on: {
					    progress: function() {
					      var swiper = this;
					      for (var i = 0; i < swiper.slides.length; i++) {
					        var slideProgress = swiper.slides[i].progress;
					        var innerOffset = swiper.width * interleaveOffset;
					        var innerTranslate = slideProgress * innerOffset;
					        swiper.slides[i].querySelector(".slide-background").style.transform = "translate3d("+innerTranslate+"px, 0, 0) scale(1)";
					        if(swiper.slides[i].querySelector(".slide-foreground"))swiper.slides[i].querySelector(".slide-foreground").style.transform = "translate3d("+innerTranslate+"px, 0, 0) scale(1)";
					      }      
					    },
					    touchStart: function() {
					      var swiper = this;
					      for (var i = 0; i < swiper.slides.length; i++) {
					        swiper.slides[i].style.transition = "";
					      }
					    },
					    setTransition: function(speed) {
					      var swiper = this;
					      for (var i = 0; i < swiper.slides.length; i++) {
					        swiper.slides[i].style.transition = speed + "ms";
					        swiper.slides[i].querySelector(".slide-background").style.transition =  speed + "ms";
					       if(swiper.slides[i].querySelector(".slide-foreground")) swiper.slides[i].querySelector(".slide-foreground").style.transition =  speed + "ms";
					      }
					    }
					  }
					};
				 	var d = ($(this).is('[data-speed]')) ? $(this).attr('data-speed') : delay;
					if($(this).hasClass('with-arrows')) settings['navigation'] = {nextEl: '.wrapslider-'+countSliders+' .swiper-next',prevEl: '.wrapslider-'+countSliders+' .swiper-prev'};
					if($(this).hasClass('with-dots')) settings['pagination'] = {el: '.wrapslider-'+countSliders+' .swiper-dots',type: 'bullets',clickable : true,};
					if($(this).hasClass('autoplay'))settings['autoplay'] = {delay: d};
					if($(this).hasClass('loop'))settings['loop'] = true;
					swiperSliderBg[countSliders] = new Swiper('.slider-'+countSliders, settings);	
					if($(this).closest('.philosophy-slider').length)philosphy = countSliders;
				}						
			})
			setTimeout(function(){
				while(count <= countSliders){
					if(swiperSliderBg[count])swiperSliderBg[count].init();
					count++;
				}	
				if (window.innerWidth < 780 && philosphy){
					swiperSliderBg[philosphy].destroy();
				}
			},800)
		}
		//gallery
		if($('.site-gallery').length){
			var settings = {
				loop: true,
				speed: 1000,
				grabCursor: true,
				watchSlidesProgress: true,
				mousewheelControl: true,
				keyboardControl: true,
				navigation: {
					nextEl: ".site-gallery .swiper-next",
					prevEl: ".site-gallery .swiper-prev"
				},
				pagination : {
					el: '.swiper-dots',
					type: 'bullets',
					clickable : true,
				},
			};
			var gallerySlider = new Swiper(".site-gallery", settings);				
		}
		//testimonial
		if($('.testimonial-slider').length){
			var settings = {
			  loop: true,
			  speed: 600,
			  autoplay: {delay: 4000},
			};
			var testimonialSlider = new Swiper(".testimonial-slider", settings);				
		}
		
	}				
	function youtube_video(){
		if($('.youtube-video').length){
	    var tag = document.createElement('script');
	    tag.src = "https://www.youtube.com/iframe_api";
	    var firstScriptTag = document.getElementsByTagName('script')[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			var playerVars = {autoplay: 0,cc_load_policy: 1,controls: 1,fs: 0,enablejsapi: 1,modestbranding: 1,playsinline: 1,rel: 0,showinfo: 0};
			var player = {}
			var count = 0;
			var videoid;
			var playerid;
			var checkYT = setInterval(function(){
		    if(YT.loaded !== 'undefined'){
		      clearInterval(checkYT);
					$('.youtube-video').each(function(){
						playerid = 'player-'+count;
						videoid = $(this).attr('data-video');
						$(this).attr('id',playerid).attr('data-index', count);
				    player[count] = new YT.Player(playerid,{videoId: videoid, playerVars: playerVars});
				    count++;
					})
		      //actions
		      $('.play-video').on('click', function(){
		      	$(this).closest('.video-wrap').addClass('video-play')
		      	var vid = $(this).closest('.video-wrap').find('iframe').attr('data-index');
		      	player[vid].playVideo();
					})
		    	elements_dimensions();
		  	}
			},600);
		}
	}
	function self_hosted_video(){
		var wrap, video, duration, checkduration, action;
		//play
		$('.video-button[data-command="play"]').click(function(){
			wrap = $(this).closest('.video-inline');
			video = wrap.find('video').get(0);
			wrap.addClass('video-play')
			wrap.find('.video-button[data-command="pause"]').removeClass('play');
			wrap.find('.video-button[data-command="pause"] i').removeClass('icon-play').addClass('icon-pause');
	  	(video.currentTime) ? action="Resume" : action="Play";
			video.play();
			checkduration = setInterval(function(){
		  	duration = video.duration	;
				if(video.currentTime >= video.duration){
					wrap.removeClass('video-play')
					video.currentTime = '0';
					clearInterval(checkduration);
				}
			},200)
		})
		$('.video-button[data-command="pause"]').click(function(){
			clearInterval(checkduration);
			wrap = $(this).closest('.video-inline');
			video = wrap.find('video').get(0);
			if($(this).hasClass('play')){
				wrap.find('.video-button[data-command="play"]').trigger('click');
			}else{
				$(this).addClass('play');
				wrap.find('.video-button[data-command="pause"] i').removeClass('icon-pause').addClass('icon-play');
		  	video.pause();
		  }
		})
		$('.video-button[data-command="fullscreen"]').click(function(){
			wrap = $(this).closest('.video-inline');
			video = wrap.find('video').get(0);
			$('body').addClass('avoid-resize')
			video.requestFullscreen();
		})
	}  
	function google_map() {
		var lat,lng;		
		if($('#googlemap').length){
			lat = $('#googlemap').attr('data-latitude')
			lng = $('#googlemap').attr('data-longitude')
			zoom = parseInt($('#googlemap').attr('data-zoom'));
			if(lat && lng){
				var myLatlng = new google.maps.LatLng(lat,lng);
				var mapOptions = {
				  zoom: zoom,
				  center: myLatlng,
					disableDefaultUI: true,
				}
				var map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);
				var marker = new google.maps.Marker({
			    position: myLatlng,
				});
				marker.setMap(map);		
				$('#googlemap').addClass('loaded');
			}else{
			}
		}
	}
	function service_init(){
		$('body').on('click', '.service-single .widget-close', function(){
			$('.services-widget .widget-target').fadeOut(400);
			$('body').removeClass('services-active');
		})
		
		$('body').on('click', '.service-link', function(e){
			e.preventDefault();
			$('.services-widget').addClass('loading');
			$('body').addClass('services-active');
			var data = {};
			data['id'] = parseInt($(this).attr('data-id'));
			$.ajax({
				url: ajaxurl,
				type: 'post',
				data: {
					action: 'get_ajax_service',
					data:data,
				},
				success: function(obj) {
					var result = JSON.parse(obj);
					$('.services-widget .widget-target').html(result['output']);
					$('.services-widget').removeClass('loading');
					$('.services-widget .widget-target').fadeIn(400);
				}
			})	
		})
		
		
	}
	function team_init(){
		$('body').on('click', '.team-single .widget-close', function(){
			$('.team-widget .widget-target').fadeOut(600);
			$('body').removeClass('team-active');
		})
		
		$('body').on('click', '.team-link', function(e){
			e.preventDefault();
			$('.team-widget').addClass('loading');
			$('body').addClass('team-active');
			var data = {};
			data['id'] = parseInt($(this).attr('data-id'));
			$.ajax({
				url: ajaxurl,
				type: 'post',
				data: {
					action: 'get_ajax_team_member',
					data:data,
				},
				success: function(obj) {
					var result = JSON.parse(obj);
					$('.team-widget .widget-scroller').html(result['output']);
					$('.team-widget').removeClass('loading');
					$('.team-widget .widget-target').fadeIn(600);
				}
			})	
		})
	}	
	function technology_init(){
		$('body').on('click', '.technology-widget .widget-close', function(){
			$('.technology-widget .widget-target').fadeOut(600, function(){
				$('.technology-widget .widget-scroller').empty();
				$('body').removeClass('technology-active');
			});
		})		
		$('body').on('click', '.technology-link', function(e){
			e.preventDefault();
			$('body').addClass('technology-active');
			$('.technology-widget').addClass('loading');
			var data = {};
			data['id'] = parseInt($(this).attr('data-id'));
			$.ajax({
				url: ajaxurl,
				type: 'post',
				data: {
					action: 'get_ajax_technology',
					data:data,
				},
				success: function(obj) {
					var result = JSON.parse(obj);
					$('.technology-widget .widget-scroller').html(result['output']);
					$('.technology-widget').removeClass('loading');
					$('.technology-widget .widget-target').fadeIn(600);
				}
			})	
		})		
	}		
	function testimonials_init(){
		$('body').on('click', '.testimonial-widget .widget-close', function(){
			$('.testimonial-widget .widget-target').fadeOut(600, function(){
				$('.testimonial-widget .widget-scroller').empty();
				$('body').removeClass('testimonials-active');
				$('.testimonial-badge').removeClass('selected');
			});
		})		
		$('body').on('click', '.testimonial-link', function(e){
			e.preventDefault();
			$('body').addClass('testimonials-active');
			$('.testimonial-widget').addClass('loading');
			$(this).closest('.testimonial-badge').addClass('selected');
			var data = {};
			data['id'] = parseInt($(this).attr('data-id'));
			$.ajax({
				url: ajaxurl,
				type: 'post',
				data: {
					action: 'get_ajax_testimonial',
					data:data,
				},
				success: function(obj) {
					var result = JSON.parse(obj);
					$('.testimonial-widget .widget-scroller').html(result['output']);
					$('.testimonial-widget').removeClass('loading');
					$('.testimonial-widget .widget-wrap-outer').show(600);
					$('.testimonial-widget .widget-target').fadeIn(600);
				}
			})	
		})		
		$('body').on('click', '.testimonial-widget .widget-arrow', function(e){
			e.preventDefault();
			$('.testimonial-widget .widget-scroller .widget-wrap-outer').fadeOut(600, function(){
				var currentslide = $('.testimonial-badge.selected').closest('.swiper-slide')
				var nextslide = ($(this).hasClass('widget-next')) ? ( (currentslide.next().length) ? currentslide.next() : $('.testimonial-widget .swiper-slide[data-swiper-slide-index="0"]') ) : ( (currentslide.prev().length) ? currentslide.prev() : $('.testimonial-widget .swiper-slide:last-child') );
				var data = {};
				data['id'] = parseInt(nextslide.find('.testimonial-badge').attr('data-id'));
				$('.testimonial-badge').removeClass('selected');
				nextslide.find('.testimonial-badge').addClass('selected');
				$.ajax({
					url: ajaxurl,
					type: 'post',
					data: {
						action: 'get_ajax_testimonial',
						data:data,
					},
					success: function(obj) {
						var result = JSON.parse(obj);
						$('.testimonial-widget .widget-scroller').html(result['output']);
						setTimeout(function(){
							$('.testimonial-widget .widget-scroller .widget-wrap-outer').fadeIn(600);
						},300);
					}
				})	
			})
		})		
	}		
	function faq_toggle(){
		$('.faq-single .faq-answer').hide();
		$('body').on('click', '.faq-single .faq-question', function(e){
			if($(this).parent().hasClass('active')){
				$('.faq-single').removeClass('active');
			}else{
				$('.faq-single').removeClass('active');
				$(this).parent().addClass('active');
			}
			$('.faq-single:not(.active) .faq-answer').slideUp()
			$('.faq-single.active .faq-answer').slideDown()

		})
	}
	function custom_cursor(){
		//init
		var cursor = $('.site-cursor');
		//move
		$(window).mousemove(function(e) {
			cursor.css({
				top: e.clientY - cursor.height() / 2,
				left: e.clientX - cursor.width() / 2
			});
		});
		//in-out
		$(window)
		.mouseleave(function() {
			cursor.css({
				opacity: "0"
			});
		})
		.mouseenter(function() {
			cursor.css({
				opacity: "1"
			});
		});
		//hovers
		$("a,button,input")
		.mouseenter(function() {
			cursor.css({
				transform: "scale(2)"
			});
		})
		.mouseleave(function() {
			cursor.css({
				transform: "scale(1)"
			});
		});
		//clicks
		$(window)
		.mousedown(function() {
			cursor.css({
				transform: "scale(.2)"
			});
		})
		.mouseup(function() {
			cursor.css({
				transform: "scale(1)"
			});
		});
	}		
	// function phone_popup_init(){
	// 	$('body').on('click', '.phone-popup .widget-close', function(){
	// 		$('.phone-popup.widget-target').fadeOut(600);
	// 		$('body').removeClass('phone-active');
	// 	})
	//
	// 	$('body').on('click', '.phone-link a', function(e){
	// 		console.log('init')
	// 		if(window.innerWidth > 700){
	// 			console.log('click')
	// 			e.preventDefault();
	// 			$('body').addClass('phone-active');
	// 			$('.phone-popup.widget-target').fadeIn(600);
	// 		}
	// 	})
	// }
	function background_image_breakpoints(){
		var desktop,mobile;
		var ww = window.innerWidth;
		$('.has-background').each(function(){
            desktop = $(this).attr('data-image-desktop');
			mobile = $(this).attr('data-image-mobile');
            if(ww > 780 && desktop) $(this).css('background-image', 'url(' + desktop + ')');
            if(ww < 781 && mobile) $(this).css('background-image', 'url(' + mobile + ')');
		})
	}
	
	function init_scroll_animations() {
		// Check if user prefers reduced motion
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		
		if (prefersReducedMotion) {
			// Skip animations for users who prefer reduced motion
			$('.animate-on-scroll, .fade-in-up, .fade-in, .scale-in, .slide-in-left, .slide-in-right').addClass('animate-in');
			return;
		}
		
		// Intersection Observer options
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};
		
		// Create Intersection Observer
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
					// Unobserve after animation to improve performance
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);
		
		// Observe all animation elements
		const animatedElements = document.querySelectorAll(
			'.animate-on-scroll, .fade-in-up, .fade-in, .scale-in, .slide-in-left, .slide-in-right, ' +
			'.philosophy-item, .service-card, .testimonial, .trust-item, .service-item, ' +
			'.fee-section, .faq-single, .team-member, .resource-card'
		);
		
		animatedElements.forEach((el, index) => {
			// Add stagger class for grid items
			if (el.classList.contains('philosophy-item') ||
			    el.classList.contains('service-card') ||
			    el.classList.contains('testimonial') ||
			    el.classList.contains('trust-item') ||
			    el.classList.contains('service-item')) {
				const staggerIndex = (index % 6) + 1;
				el.classList.add('fade-in-up', `stagger-${staggerIndex}`);
			}
			
			observer.observe(el);
		});
		
		// Special handling for hero section
		const heroContent = document.querySelector('.hero-content');
		if (heroContent) {
			// Hero animations are CSS-based, just ensure they trigger
			setTimeout(() => {
				heroContent.classList.add('animate-in');
			}, 100);
		}
	}
	
	function init_image_animations() {
		// Check if user prefers reduced motion
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		
		if (prefersReducedMotion) {
			return;
		}
		
		// Observe images for lazy load fade-in
		const imageObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					
					// Add fade-in class when image loads
					if (img.complete) {
						img.style.opacity = '1';
					} else {
						img.addEventListener('load', () => {
							img.style.transition = 'opacity 0.6s ease';
							img.style.opacity = '1';
						});
					}
					
					imageObserver.unobserve(img);
				}
			});
		}, {
			threshold: 0.1,
			rootMargin: '50px'
		});
		
		// Observe all images with lazy loading
		document.querySelectorAll('img[loading="lazy"]').forEach(img => {
			img.style.opacity = '0';
			imageObserver.observe(img);
		});
	}

})(jQuery);