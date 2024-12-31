function toggleCategories(event) {
   event.preventDefault(); // Prevent default anchor behavior
   const popup = document.getElementById('categoriesPopup');
   const trigger = event.target.getBoundingClientRect(); // Get position of trigger element
 
   // Position the popup relative to the trigger
   popup.style.display = popup.style.display === 'none' || !popup.style.display ? 'block' : 'none';
   popup.style.top = `${trigger.bottom + window.scrollY}px`; // Adjust for viewport
   popup.style.left = `${trigger.left + trigger.width / 2}px`;
 }
 
 // Close the popup if clicking outside
 document.addEventListener('click', function (event) {
   const popup = document.getElementById('categoriesPopup');
   const isClickInside = popup.contains(event.target) || event.target.closest('a[href="#categories"]');
 
   if (!isClickInside) {
     popup.style.display = 'none'; // Hide the popup
   }
 });
 