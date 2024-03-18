document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function(item) {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isOpen = content.classList.contains('show');
  
        closeAllAccordions();
  
        if (!isOpen) {
          content.classList.add('show');
        }
      });
    });
  
    function closeAllAccordions() {
      const allContents = document.querySelectorAll('.accordion-content');
  
      allContents.forEach(function(content) {
        content.classList.remove('show');
      });
    }
  });
  
  