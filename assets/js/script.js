document.addEventListener('DOMContentLoaded', function() {
  const follower = document.querySelector('.cursor-follower');
  
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  
  // Premium smooth follow effect (lower = smoother)
  const ease = 0.08;
  
  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Optional: Detect interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.classList.add('hover');
    });
    
    el.addEventListener('mouseleave', () => {
      follower.classList.remove('hover');
    });
  });
  
  // Animation loop
  function animate() {
    // Calculate distance with premium easing
    let dx = mouseX - cursorX;
    let dy = mouseY - cursorY;
    
    cursorX += dx * ease;
    cursorY += dy * ease;
    
    // Apply position
    follower.style.left = `${cursorX}px`;
    follower.style.top = `${cursorY}px`;
    
    requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
});




jQuery.noConflict();
jQuery(document).ready(function($){
								
							
function lightboxPhoto() {
	
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
		if(jQuery().prettyPhoto) {
	
		lightboxPhoto(); 
			
	}
	
	
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});
