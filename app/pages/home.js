import data, { addBookmark, removeBookmark, isBookmarked } from '../data.js';

function EventCard(event) {
  const bookmarked = isBookmarked(event.id);
  return `
    <div class="flex flex-col w-80 h-80 rounded-2xl border border-gray-400">
      <div style="background-image: url(${event.image});" class="h-1/2 bg-no-2 flex flex-row justify-between px-4 py-2 rounded-t-2xl">
        <div class="flex flex-col gap-2">
          ${event.isPremium ? '<p class="text-white text-xs bg-yellow-500 rounded-lg px-2 py-0.5 w-fit h-fit">PREMIUM</p>' : ''}
          ${event.status === 'live' ? '<p class="text-white text-xs bg-red-600 rounded-lg px-2 py-0.5 w-fit h-fit">LIVE</p>' : ''}
        </div>
        <iconify-icon icon="lucide:bookmark" class="bookmark text-xl ${bookmarked ? 'bg-black' : 'bg-gray-500'} rounded-lg p-2 w-fit h-fit text-white bookmark-icon" data-event-id="${event.id}"></iconify-icon>
      </div>
      <div class="h-1/2 flex flex-col py-4 px-2 gap-2">
        <h1 class="event text-xl font-semibold">${event.title}</h1>
        <p class="planner text-base text-gray-500">${event.planner}</p>
        <div class="date flex flex-row items-center gap-2">
          <iconify-icon icon="uil:calender" class="text-base text-gray-500"></iconify-icon>
          <p class="text-xs text-gray-500">${event.date}</p>
        </div>
        <div class="time flex flex-row items-center gap-2">
          <iconify-icon icon="mingcute:time-line" class="text-base text-gray-500"></iconify-icon>
          <p class="text-xs text-gray-500">${event.time}</p>
        </div>
        <div class="time flex flex-row items-center gap-2">
          <iconify-icon icon="uil:location" class="text-base text-gray-500"></iconify-icon>
          <p class="text-xs text-gray-500">${event.location}</p>
        </div>
      </div>
    </div>
  `;
}

function renderEvents(filterType = 'all') {
  const happeningNowEvents = data.events.filter(event => event.status === 'live' && (filterType === 'all' || event.type === filterType));
  const premiumEvents = data.events.filter(event => event.isPremium && event.status !== 'live' && (filterType === 'all' || event.type === filterType));
  const upcomingEvents = data.events.filter(event => event.status === 'upcoming' && !event.isPremium && (filterType === 'all' || event.type === filterType));

  document.querySelector('#happening-now .flex-wrap').innerHTML = happeningNowEvents.map(EventCard).join('');
  document.querySelector('#premium-events .flex-wrap').innerHTML = premiumEvents.map(EventCard).join('');
  document.querySelector('#upcoming-events .flex-wrap').innerHTML = upcomingEvents.map(EventCard).join('');
}

export default function HomePage() {
  // Initial render
  setTimeout(() => {
    renderEvents();
    const filterDropdown = document.getElementById('event-type-filter');
    filterDropdown.addEventListener('change', (e) => {
      renderEvents(e.target.value);
    });

    document.getElementById('main-content').addEventListener('click', (e) => {
        if (e.target.classList.contains('bookmark-icon')) {
            const eventId = parseInt(e.target.dataset.eventId);
            if (isBookmarked(eventId)) {
                removeBookmark(eventId);
            } else {
                addBookmark(eventId);
            }
            e.target.classList.toggle('bg-black');
            e.target.classList.toggle('bg-gray-500');
        }
    });
  }, 0);

  return `
    <h1 class="text-3xl font-bold">Welcome to UniHub</h1>
    <p class="text-sm md:text-base text-gray-500">Discover what's happening on campus</p>

    <div class="w-full flex justify-end">
        <select id="event-type-filter" class="bg-gray-300 text-black px-3 py-1 rounded-xl">
            <option value="all">All Types</option>
            <option value="Educational">Educational</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Cultural">Cultural</option>
        </select>
    </div>

    <section id="happening-now" class="happening-now mt-10 flex flex-col justify-center gap-6">
      <h1 class="text-lg md:text-2xl font-bold">Happening Now</h1>
      <div class="flex flex-row flex-wrap justify-center items-center gap-6">
      </div>
    </section>

    <section id="premium-events" class="premium-events mt-10 flex flex-col justify-center gap-4">
      <h1 class="text-lg md:text-2xl font-bold">Premium Listed Events</h1>
      <div class="flex flex-row flex-wrap justify-center items-center gap-6">
      </div>
    </section>

    <section id="upcoming-events" class="upcoming-events mt-10 flex flex-col justify-center gap-4">
      <h1 class="text-lg md:text-2xl font-bold">Upcoming Events</h1>
      <div class="flex flex-row flex-wrap justify-center items-center gap-6">
      </div>
    </section>
  `;
}
