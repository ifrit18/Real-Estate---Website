document.addEventListener("DOMContentLoaded", function () {
  const properties = document.querySelectorAll(".property");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentPage = 1;
  const propertiesPerPage = 6;

  showProperties();

  function showProperties() {
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    properties.forEach((property, index) => {
      if (index >= startIndex && index < endIndex) {
        property.style.display = "block";
      } else {
        property.style.display = "none";
      }
    });

    // Toggle visibility of the "Previous" button
    if (currentPage === 1) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "inline-block";
    }
  }

  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showProperties();
    }
  });

  nextBtn.addEventListener("click", function () {
    const totalPages = Math.ceil(properties.length / propertiesPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      showProperties();
    }
  });
});

