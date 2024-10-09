import { format } from "date-fns";
import { useRouter } from "next/navigation";
import EventCard from "./EventCard";

const Events = ({ selectedDate, events }) => {
  const router = useRouter();

  const handleAddEvent = () => {
    router.push(`/add-event?date=${format(selectedDate, "yyyy-MM-dd")}`);
  };

  const eventsElements = events.map((event) => {
    return <EventCard key={event.id} event={event} />;
  });

  return (
    <aside className="grid content-between px-4 w-96">
      <div>
        <h2 className="text-2xl font-semibold border-b-[1px] pb-2">
          <time dateTime={format(selectedDate, "yyyy-MM-dd")}>
            {format(selectedDate, "MMMM dd, yyy")}
          </time>
        </h2>
        {eventsElements.length > 0 ? (
          eventsElements
        ) : (
          <p className="text-sm text-center py-2 font-medium">No events</p>
        )}
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
