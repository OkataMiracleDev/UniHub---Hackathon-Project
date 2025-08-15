// Get current file name from URL (handles subfolders)
let currentPage = window.location.pathname.split('/').pop();
if (currentPage === "" || currentPage === "/") {
  currentPage = "index.html"; // treat homepage as index.html
}

// Function to update active state
function setActiveState(navSelector, activeBg, inactiveBg) {
  const links = document.querySelectorAll(`${navSelector} a`);

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      // Active styles
      link.classList.remove(inactiveBg);
      link.classList.add(activeBg);

      link.querySelectorAll("p, iconify-icon").forEach(el => {
        el.classList.remove("text-gray-500");
        el.classList.add("text-white");
      });
    } else {
      // Inactive styles
      link.classList.remove(activeBg);
      link.classList.add(inactiveBg);

      link.querySelectorAll("p, iconify-icon").forEach(el => {
        el.classList.remove("text-white");
        el.classList.add("text-gray-500");
      });
    }
  });
}

// Apply for PC nav (inactive = bg-[#e7e7e7])
setActiveState(".pc-navigation", "bg-black", "bg-[#e7e7e7]");

// Apply for Mobile nav (inactive = bg-white)
setActiveState(".mobile-navigation", "bg-black", "bg-white");

// bookmark button
  // Get all elements with the class 'bookmark-icon'
  const bookmarkIcons = document.querySelectorAll('.bookmark-icon');

  // Loop through each icon in the NodeList
  bookmarkIcons.forEach(icon => {
    // Add a click event listener to the current icon
    icon.addEventListener('click', () => {
      // Toggle the 'bg-black' and 'bg-gray-500' classes on the clicked icon
      icon.classList.toggle('bg-black');
      icon.classList.toggle('bg-gray-500');
    });
  });
