import data from '../data.js';

function EventCard(event) {
  return `
    <div class="flex flex-col w-80 h-80 rounded-2xl border border-gray-400">
      <div style="background-image: url(${event.image});" class="h-1/2 bg-no-2 flex flex-row justify-between px-4 py-2 rounded-t-2xl">
        <p class="event-category text-white text-xs liquid-glass rounded-lg px-2 py-0.5 mx-4 my-2 w-fit h-fit">${event.type}</p>
        <iconify-icon icon="lucide:bookmark" class="bookmark text-xl bg-black rounded-lg p-2 w-fit h-fit text-white bookmark-icon" data-event-id="${event.id}"></iconify-icon>
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

function renderBookmarks() {
    const bookmarkedEvents = data.events.filter(event => data.bookmarks.includes(event.id));
    const eventGrid = document.getElementById('bookmark-grid');
    if(eventGrid) {
        eventGrid.innerHTML = bookmarkedEvents.map(EventCard).join('');
    }
}

import { removeBookmark } from '../data.js';

export default function BookmarksPage() {
    setTimeout(() => {
        renderBookmarks();
        document.getElementById('main-content').addEventListener('click', (e) => {
            if (e.target.classList.contains('bookmark-icon')) {
                const eventId = parseInt(e.target.dataset.eventId);
                removeBookmark(eventId);
                renderBookmarks();
            }
        });
    }, 0)
  return `
    <h1 class="text-3xl font-bold">Bookmarks</h1>
    <p class="text-sm md:text-base text-gray-500">Your saved events</p>

    <section class="events w-full mt-10 flex flex-col justify-center gap-6">
      <div id="bookmark-grid" class="flex flex-row flex-wrap justify-center items-center gap-4">
      </div>
    </section>
  `;
}
