// Move the function outside the event listener
function toggleAccordion(sectionId) {
    var section = document.getElementById(sectionId);
  
    // Check if the section is not null before proceeding
    if (section) {
      // Hide all sections before showing/hiding the clicked one
      var allSections = document.querySelectorAll('.accordion-content');
      allSections.forEach(function (item) {
        if (item.id !== sectionId) {
          item.style.display = 'none';
        }
      });
  
      // Toggle the display of the clicked section
      section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {

        var currentYear = new Date().getFullYear();
        document.getElementById('copyright-year').textContent = currentYear;
  });
  