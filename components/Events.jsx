import { format } from "date-fns";
import { useRouter } from "next/navigation";

const Events = ({ selectedDate }) => {
  const router = useRouter();

  const handleAddEvent = () => {
    router.push(`/add-event?date=${format(selectedDate, "yyyy-MM-dd")}`);
  };

  return (
    <aside className="grid content-between">
      <div>
        <h3 className="text-xl font-semibold">
          {format(selectedDate, "eeee")}
        </h3>
        <h2 className="text-2xl font-semibold">
          {format(selectedDate, "MMMM d")}
        </h2>
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
