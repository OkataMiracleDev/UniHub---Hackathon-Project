import data, { addBookmark, removeBookmark, isBookmarked } from '../data.js';

function EventCard(event) {
  const bookmarked = isBookmarked(event.id);
  return `
    <div class="flex flex-col w-80 h-80 rounded-2xl border border-gray-400">
      <div style="background-image: url(${event.image});" class="h-1/2 bg-no-2 flex flex-row justify-between px-4 py-2 rounded-t-2xl">
        <p class="event-category text-white text-xs liquid-glass rounded-lg px-2 py-0.5 mx-4 my-2 w-fit h-fit">${event.type}</p>
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

function renderEvents(events) {
    const eventGrid = document.getElementById('event-grid');
    if(eventGrid) {
        eventGrid.innerHTML = events.map(EventCard).join('');
    }
}

export default function DiscoverPage() {
    setTimeout(() => {
        renderEvents(data.events);
        const searchInput = document.getElementById('eventSearch');
        searchInput.addEventListener('keyup', (e) => {
            const searchQuery = e.target.value.toLowerCase();
            const filteredEvents = data.events.filter(event =>
                event.title.toLowerCase().includes(searchQuery) ||
                event.planner.toLowerCase().includes(searchQuery) ||
                event.type.toLowerCase().includes(searchQuery)
            );
            renderEvents(filteredEvents);
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
    <h1 class="text-3xl font-bold">Discover Events</h1>
    <p class="text-sm md:text-base text-gray-500">Find events that match your interests</p>

    <form class="flex flex-row w-full bg-gray-300 rounded-2xl px-2 py-2 items-center gap-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200" action="" method="get">
      <iconify-icon class="text-xl" icon="lucide:search"></iconify-icon>
      <input class="w-full h-full placeholder:text-gray-500 focus:outline-none bg-transparent" type="search" name="event-search" id="eventSearch" placeholder="Search events, clubs, and people...">
    </form>

    <section class="events w-full mt-10 flex flex-col justify-center gap-10">
      <div id="event-grid" class="flex flex-row flex-wrap justify-center items-center gap-4">

      </div>
    </section>
  `;
}
