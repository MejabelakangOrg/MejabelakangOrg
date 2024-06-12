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

  const searchItems = [
    { name: "Dns Server", url: "/assets/html/DNS_TUTOR.html" },
    { name: "Terminal customuzation", url: "/assets/html/custom_terminal_tutor.html" },
    { name: "Instalasi Debian Server", url: "/assets/html/install_debian_tutor.html" },
    // Tambahkan lebih banyak item sesuai kebutuhan
  ];

// Fungsi untuk memfilter hasil berdasarkan input
function filterResults(query) {
  return searchItems.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
}

// Fungsi untuk menampilkan hasil autocomplete
function showResults() {
  const input = document.getElementById('autocomplete-input');
  const resultsContainer = document.getElementById('autocomplete-results');
  const filteredResults = filterResults(input.value);
  resultsContainer.innerHTML = ''; // Bersihkan hasil sebelumnya

  if (input.value.length > 0) {
    filteredResults.forEach((item) => {
      const resultItem = document.createElement('div');
      resultItem.classList.add("p-3", "mt-1", "hover:bg-gray-800", "rounded-md", "cursor-pointer", "bg-slate-900", "text-white");
      resultItem.textContent = item.name;
      resultItem.onclick = () => window.location.href = item.url; // Pindah ke URL saat item diklik
      resultsContainer.appendChild(resultItem);
    });
    resultsContainer.classList.remove('hidden');
  } else {
    resultsContainer.classList.add('hidden');
  }
}

// Event listener untuk input search bar
document.getElementById('autocomplete-input').addEventListener('input', showResults);



});

