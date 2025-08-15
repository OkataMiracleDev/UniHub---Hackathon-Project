// Select sorter buttons from the sorter bar
const sorterButtons = document.querySelectorAll('.event-sorter .sorter');

// Select all event cards
const eventCards = document.querySelectorAll('.event-card');

// "No events" message
const noSorterMessage = document.querySelector('.no-sorter');

function handleSorterClick(e) {
  const category = e.target.textContent.trim().toLowerCase().replace(/\s+/g, '-'); 
  // e.g. "Coming Soon" → "coming-soon"

  // Reset button styles
  sorterButtons.forEach(button => {
    button.classList.remove('bg-white');
    button.classList.add('bg-gray-300', 'text-black');
  });

  // Highlight active button
  e.target.classList.remove('bg-gray-300', 'text-black');
  e.target.classList.add('bg-white');

  let foundEvents = false;

  // Filter events based on category
  eventCards.forEach(card => {
    if (card.classList.contains(category)) {
      card.style.display = 'flex';
      foundEvents = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Show/hide "No events" message
  noSorterMessage.style.display = foundEvents ? 'none' : 'block';
}

// Attach listeners
sorterButtons.forEach(button => {
  button.addEventListener('click', handleSorterClick);
});

// On page load → make "Coming Soon" active
document.addEventListener('DOMContentLoaded', () => {
  const defaultButton = Array.from(sorterButtons).find(btn => 
    btn.textContent.trim().toLowerCase() === 'coming soon'
  );
  
  if (defaultButton) {
    defaultButton.click(); // Trigger click so filtering logic runs
  }
});
