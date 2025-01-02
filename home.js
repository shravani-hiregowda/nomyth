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

// Function to dynamically load content
function loadFeed(category) {
  const contentDiv = document.getElementById('dynamicContent'); // Where the content will load
  let content = '';

  switch (category) {
    case 'ai':
      content = `
        <h2>Artificial Intelligence</h2>
        <p>Discover the world of AI, from neural networks to machine learning breakthroughs.</p>
      `;
      break;
    case 'web':
      content = `
        <h2>Web Development</h2>
        <p>Learn about the latest trends in web technologies, frameworks, and best practices.</p>
      `;
      break;
    case 'mobile':
      content = `
        <h2>Mobile Development</h2>
        <p>Explore innovations in mobile app development and cross-platform tools.</p>
      `;
      break;
    case 'cloud':
      content = `
        <h2>Cloud Computing</h2>
        <p>Understand how cloud computing is transforming the tech industry and enabling scalability.</p>
      `;
      break;
    case 'cyber':
      content = `
        <h2>Cyber Security</h2>
        <p>Stay ahead with insights into cybersecurity tools, challenges, and solutions.</p>
      `;
      break;
    case 'iot':
      content = `
        <h2>Internet of Things (IoT)</h2>
        <p>Dive into the interconnected world of IoT and its impact on our daily lives.</p>
      `;
      break;
    default:
      content = `<p>No content available for this category.</p>`;
  }

  // Update the content dynamically
  contentDiv.innerHTML = content;

  // Scroll to the dynamic content
  contentDiv.scrollIntoView({ behavior: 'smooth' });
}


