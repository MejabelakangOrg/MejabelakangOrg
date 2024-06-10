document.addEventListener("DOMContentLoaded", () => {
  // Select all dropdown toggle buttons
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      // Find the next sibling element which is the dropdown menu
      const dropdownMenu = toggle.nextElementSibling;

      // Toggle the 'hidden' class to show or hide the dropdown menu
      if (dropdownMenu.classList.contains("hidden")) {
        // Hide any open dropdown menus before showing the new one
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.add("hidden");
        });

        dropdownMenu.classList.remove("hidden");
      } else {
        dropdownMenu.classList.add("hidden");
      }
    });
  });

  // Optional: Clicking outside of an open dropdown menu closes it
  window.addEventListener("click", (event) => {
    if (!event.target.matches(".dropdown-toggle")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (!menu.contains(event.target)) {
          menu.classList.add("hidden");
        }
      });
    }
  });
});

// Mobile menu toggle
 
document.addEventListener("DOMContentLoaded", () => {
     const mobileMenuButton = document.querySelector(".mobile-menu-button");
     const mobileMenu = document.querySelector(".navigation-menu");

     mobileMenuButton.addEventListener("click", () => {
       mobileMenu.classList.toggle("hidden");
     });


});



