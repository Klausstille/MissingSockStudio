$(document).ready(function() {
	$('section#stuff a').on('click', function() {
		$('div#modal img').attr('src', $(this).attr('data-image-url') );
	})

});

		var nav = $('.navbar-fixed-top');
		var distance = $('.navbar-fixed-top').offset();

		if (distance.top >= 20 ) {
				nav.addClass('effect');
		}

		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				nav.addClass('effect');
			} else {
				nav.removeClass('effect');
			}

		/*	$('.collection-image img').waypoint(function() {
				$('.collection-image img').addClass('animated infinite pulse')
			}, {
				offset:'50%'
			});*/

		});

smoothScroll.init({
	speed:800,
	easing:'easeInOutCubic',
	offset: 47,
	pagination: true, 
	responsiveFallback: false,
	loop: false, 
	updateURL: false
});


$('#about .middle-circle').waypoint(function() {
		$('#about .middle-circle').addClass('animated infinite pulse')
	}, {
		offset: '50%'
	});

var ƒ = function() {
	
	function Draggable(element,dragStart,dragDrop) {
			this.element = element;
			this.dragStart = dragStart;
			this.dragDrop = dragDrop;
			
			this.element.classList.add('draggable');
			var self = this;
			
			var move = function(event) {
				console.log(event.type);
				console.log(event.currentTarget);
				
				//don't bubble this event - mousedown
				event.stopPropagation();
				//prevent any default action
				event.preventDefault();
				
				var originalLeft = parseInt(window.getComputedStyle(this).left);
				var originalTop = parseInt(window.getComputedStyle(this).top);
				
				var mouseDownX = event.clientX;
				var mouseDownY = event.clientY;
				
				function dragMe(event) {
					self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
					self.element.style.top = originalTop + event.clientY - mouseDownY + "px";
					event.stopPropagation();	
				}

				function dropMe(event) {
					document.removeEventListener('mousemove',dragMe,true);
					document.removeEventListener('mouseup',dropMe,true);
					event.stopPropagation();	
				}
				
				
				document.addEventListener('mouseup',dropMe,true);
				document.addEventListener('mousemove',dragMe,true);
				
			
			};
			
			this.element.addEventListener('mousedown',move,false);
			
	}

	var imageElement1 = document.getElementsByTagName('img') [1];
	var imageElement2 = document.getElementsByTagName('img') [2];
	var imageElement3 = document.getElementsByTagName('img') [3];
	var imageElement4 = document.getElementsByTagName('img') [4];
	var imageElement5 = document.getElementsByTagName('img') [5];
	var imageElement6 = document.getElementsByTagName('img') [6];
	var imageElement7 = document.getElementsByTagName('img') [7];
	var imageElement8 = document.getElementsByTagName('img') [8];
	var imageElement9 = document.getElementsByTagName('img') [9];
	var imageElement10 = document.getElementsByTagName('img') [10];
	var imageElement11 = document.getElementsByTagName('img') [11];
	var imageElement12 = document.getElementsByTagName('img') [12];
	var imageElement13 = document.getElementsByTagName('img') [13];
	var imageElement14 = document.getElementsByTagName('img') [14];
	var imageElement15 = document.getElementsByTagName('img') [15];
	var imageElement16 = document.getElementsByTagName('img') [16];
	var imageElement17 = document.getElementsByTagName('img') [17];
	var imageElement18 = document.getElementsByTagName('img') [18];
	var imageElement19 = document.getElementsByTagName('img') [19];
	var imageElement20 = document.getElementsByTagName('img') [20];
	var dragObject1 = new Draggable(imageElement1);
	var dragObject2 = new Draggable(imageElement2);
	var dragObject3 = new Draggable(imageElement3);
	var dragObject4 = new Draggable(imageElement4);
	var dragObject5 = new Draggable(imageElement5);
	var dragObject6 = new Draggable(imageElement6);
	var dragObject7 = new Draggable(imageElement7);
	var dragObject8 = new Draggable(imageElement8);
	var dragObject9 = new Draggable(imageElement9);
	var dragObject10 = new Draggable(imageElement10);
	var dragObject11 = new Draggable(imageElement11);
	var dragObject12 = new Draggable(imageElement12);
	var dragObject13 = new Draggable(imageElement13);
	var dragObject14 = new Draggable(imageElement14);
	var dragObject15 = new Draggable(imageElement15);
	var dragObject16 = new Draggable(imageElement16);
	var dragObject17 = new Draggable(imageElement17);
	var dragObject18 = new Draggable(imageElement18);
	var dragObject19 = new Draggable(imageElement19);
	var dragObject20 = new Draggable(imageElement20);
	};

window.addEventListener('load',ƒ,false);

$( document ).ready(function() {

			/* Basic Gallery */
			$( '.swipebox' ).swipebox();
			
			/* Video */
			$( '.swipebox-video' ).swipebox();

			/* Dynamic Gallery */
			$( '#gallery' ).click( function( e ) {
				e.preventDefault();
				$.swipebox( [
					{ href : 'http://swipebox.csag.co/mages/image-1.jpg', title : 'My Caption' },
					{ href : 'http://swipebox.csag.co/images/image-2.jpg', title : 'My Second Caption' }
				] );
			} );

      });