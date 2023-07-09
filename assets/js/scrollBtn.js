var scrollBtn = document.querySelector('.jump-arrow')
scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  document.addEventListener("scroll", (e) => {
     if (document.documentElement.scrollTop <= 300){
        scrollBtn.style.display = "none";
     } else {
      scrollBtn.style.display = "block";
     }
  });