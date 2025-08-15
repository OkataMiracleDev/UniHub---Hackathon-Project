// Get only the sorter buttons from the sorter bar
const sorterButtons = document.querySelectorAll('.event-sorter .sorter');

// Get all event cards
const eventCards = document.querySelectorAll('.event-card');

// "No events" message
const noSorterMessage = document.querySelector('.no-sorter');

function handleSorterClick(e) {
  const category = e.target.textContent.trim();

  // Remove active state from all buttons
  sorterButtons.forEach(button => {
    button.classList.remove('bg-black', 'text-white');
    button.classList.add('bg-gray-300', 'text-black');
  });

  // Set active state on clicked button
  e.target.classList.remove('bg-gray-300', 'text-black');
  e.target.classList.add('bg-black', 'text-white');

  let foundEvents = false;

  eventCards.forEach(card => {
    const cardCategory = card.querySelector('.event-category').textContent.trim();

    if (category === 'All' || category === cardCategory) {
      card.style.display = 'flex';
      foundEvents = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Show or hide "No events found"
  noSorterMessage.style.display = foundEvents ? 'none' : 'block';
}

// Attach click listeners
sorterButtons.forEach(button => {
  button.addEventListener('click', handleSorterClick);
});

// On page load, set "All" as active
document.addEventListener('DOMContentLoaded', () => {
  sorterButtons[0].classList.remove('bg-gray-300', 'text-black');
  sorterButtons[0].classList.add('bg-black', 'text-white');
  noSorterMessage.style.display = 'none';
});
