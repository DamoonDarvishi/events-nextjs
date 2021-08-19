const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description: "Everyone can learn to code",
    location: "Somestreet 25, 12345 San Francisco",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description: "We know: Networking is no fun if you are an ...",
    location: "New Wall Street 5, 98687 New York",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for exroverts",
    description: "You probably need no help with networking in ...",
    location: "My Street 12, 10115 Broke City",
    date: "2021-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
