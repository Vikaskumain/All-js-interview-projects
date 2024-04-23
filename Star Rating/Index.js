document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        const rating = parseInt(star.getAttribute("data-index"));
        setRating(rating);
      });
    });
    
    function setRating(rating) {
      document.querySelector(".star-rating").setAttribute("data-rating", rating);
      stars.forEach(function(star) {
        const index = parseInt(star.getAttribute("data-index"));
        star.classList.toggle("active", index <= rating);
      });
    }
  });
  