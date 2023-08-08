function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("collapsed-sidebar");
}

// Load header content
fetch("header.html")
  .then((response) => response.text())
  .then((content) => {
    document.getElementById("header-container").innerHTML = content;
  });

// Load sidebar content
fetch("sidebar.html")
  .then((response) => response.text())
  .then((content) => {
    document.getElementById("sidebar-container").innerHTML = content;
  });

function showTabContent(tabIndex) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  const selectedContent = document.getElementById(`tab-content-${tabIndex}`);
  selectedContent.style.display = "block";

  // Update active tab
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabs[tabIndex].classList.add("active");
}


// // Toggle chevron icons on accordion toggle
// $('.accordion').on('hidden.bs.collapse', function (e) {
//   $(e.target).prev('.card-header').find('.toggle-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
// });

// $('.accordion').on('shown.bs.collapse', function (e) {
//   $(e.target).prev('.card-header').find('.toggle-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
// });
