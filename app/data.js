const data = {
  events: [
    {
      id: 1,
      title: "Computer Science Society...",
      planner: "CS Society",
      type: "Educational",
      date: "2024-03-15",
      time: "2:00 PM - 6:00 PM",
      location: "New Lecture Hall",
      image: "/images/seminar.webp",
      isPremium: false,
      status: "live",
    },
    {
      id: 2,
      title: "Live Music Performance",
      planner: "Music Department",
      type: "Entertainment",
      date: "2024-03-15",
      time: "3:30 PM - 5:00 PM",
      location: "Open Air Theatre",
      image: "/images/concert.webp",
      isPremium: true,
      status: "live",
    },
    {
      id: 3,
      title: "VC Basketball Tournament",
      planner: "Sports Committee",
      type: "Sports",
      date: "2024-03-15",
      time: "4:00 PM - 7:00 PM",
      location: "Main Stadium",
      image: "/images/basketball.webp",
      isPremium: false,
      status: "live",
    },
    {
      id: 4,
      title: "Career Fair",
      planner: "Computing Faculty",
      type: "Educational",
      date: "2024-03-16",
      time: "9:00 AM - 4:00 PM",
      location: "New Lecture Hall",
      image: "/images/comp.webp",
      isPremium: true,
      status: "upcoming",
    },
    {
      id: 5,
      title: "Engineering Week Opening",
      planner: "Engineering Faculty",
      type: "Educational",
      date: "2024-03-18",
      time: "10:00 AM - 12:00 PM",
      location: "Engineering Auditorium",
      image: "/images/engine.webp",
      isPremium: false,
      status: "upcoming",
    },
    {
      id: 6,
      title: "Cultural Night",
      planner: "SUG",
      type: "Cultural",
      date: "2024-03-20",
      time: "6:00 PM - 10:00 PM",
      location: "Open Air Theatre",
      image: "/images/culture.webp",
      isPremium: false,
      status: "upcoming",
    },
    {
      id: 7,
      title: "Leadership Workshop",
      planner: "WEMA BANK",
      type: "Educational",
      date: "2024-03-22",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Room A",
      image: "/images/leadership.webp",
      isPremium: true,
      status: "upcoming",
    },
    {
      id: 8,
      title: "VC Super League",
      planner: "Sports Committee",
      type: "Sports",
      date: "2024-03-25",
      time: "4:00 PM - 6:00 PM",
      location: "Main Stadium",
      image: "/images/soccer.webp",
      isPremium: false,
      status: "upcoming",
    },
  ],
  users: [],
  bookmarks: [],
  tickets: [],
  community: {},
};

export function addBookmark(eventId) {
    if (!data.bookmarks.includes(eventId)) {
        data.bookmarks.push(eventId);
    }
}

export function removeBookmark(eventId) {
    const index = data.bookmarks.indexOf(eventId);
    if (index > -1) {
        data.bookmarks.splice(index, 1);
    }
}

export function isBookmarked(eventId) {
    return data.bookmarks.includes(eventId);
}

export default data;
