import { format } from "date-fns";
import { useRouter } from "next/navigation";
import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    title: "Learn NextJS",
    date: "2024-10-10",
    time: "10:00 AM - 12:00 PM",
  },
  {
    id: 2,
    title: "Learn React",
    date: "2024-10-10",
    time: "1:00 PM - 3:00 PM",
  },
];

const Events = ({ selectedDate }) => {
  const router = useRouter();

  const handleAddEvent = () => {
    router.push(`/add-event?date=${format(selectedDate, "yyyy-MM-dd")}`);
  };

  const eventsElements = events.map((event) => {
    return <EventCard key={event.id} title={event.title} time={event.time} />;
  });

  return (
    <aside className="grid content-between px-4">
      <div>
        <h2 className="text-2xl font-semibold border-b-[1px] pb-2">
          {format(selectedDate, "eeee, MMMM d")}
        </h2>
        {eventsElements}
      </div>
      <button
        className="btn border-blue-100 bg-blue-100 hover:bg-blue-400 hover:text-neutral-100"
        onClick={handleAddEvent}
      >
        Add Event
      </button>
    </aside>
  );
};

export default Events;
