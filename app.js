  /*---------------------------Menu Icon-------------------------------*/
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".list-item");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
 
  
  const slides = document.querySelectorAll('.slide-img');
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  showSlide(current);

  // Change every 2 seconds
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);


/*-----------------------------------Prev & Next Btn------------------------------------------------*/


  const scrollContainer = document.getElementById("productScroll");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -250, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 250, behavior: "smooth" });
  });




/*--------------------------Search Input Interactivity----------------------------------*/

  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");

  searchIcon.addEventListener("click", () => {
    searchInput.style.display = searchInput.style.display === "block" ? "none" : "block";
    if (searchInput.style.display === "block") {
      searchInput.focus();
    }
  });

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (title.includes(term)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
