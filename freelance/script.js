$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      console.log(this.hash);
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "" && this.hash !== "#modal1") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  var articlesBG = document.getElementById("articlesBG"); 
  var articlesTitle = document.getElementById("articlesTitle"); 
  articlesBG.style.webkitAnimationPlayState = "paused";
  articlesTitle.style.webkitAnimationPlayState = "paused";

  var portfolioBG = document.getElementById("portfolioBG"); 
  var portfolioTitle = document.getElementById("portfolioTitle"); 
  portfolioBG.style.webkitAnimationPlayState = "paused";
  portfolioTitle.style.webkitAnimationPlayState = "paused";

  window.setInterval(function(){
    getScrollPosition();
  }, 100);

function getScrollPosition () {
  let scrollPos = window.scrollY;
  if(scrollPos < 1650 && scrollPos > 750){
    portfolioBG.style.webkitAnimationPlayState = "running";
    portfolioTitle.style.webkitAnimationPlayState = "running";  
  }
  else if (scrollPos > 1650){
    articlesBG.style.webkitAnimationPlayState = "running";
    articlesTitle.style.webkitAnimationPlayState = "running";
  }
}

var mobileAlert = document.getElementById("alertMobile");

function noScroll() {
  window.scrollTo(0, 0);
}
console.log(window.innerWidth);
if(window.innerWidth < 1500){
  window.addEventListener('scroll', noScroll);
}

function closeAlert()
{
  window.removeEventListener('scroll', noScroll);  
  mobileAlert.remove();
}