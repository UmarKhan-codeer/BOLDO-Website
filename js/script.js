 const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.querySelector(".navbar__menu-list");
  const menuIcon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });


 
