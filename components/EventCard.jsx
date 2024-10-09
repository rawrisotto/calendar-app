import { parseISO, format } from "date-fns";
import { useRouter } from "next/navigation";

const EventCard = ({ event }) => {
  const startDateTime = parseISO(event.startDateTime);
  const endDateTime = parseISO(event.endDateTime);
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/edit-event?id=${event.id}`);
  }

  return (
    <button
      className="border-b-[1px] py-2 px-4 w-full text-left"
      key={event.id}
      onClick={handleRedirect}
    >
      <h3 className="text-sm font-medium">{event.title}</h3>
      <p className="text-xs">
        <time dateTime={event.startDateTime}>
          {format(startDateTime, "MMM d yyyy, h:mm a")}
        </time>{" "}
        -{" "}
        <time dateTime={event.endDateTime}>
          {format(endDateTime, "MMM d yyyy, h:mm a")}
        </time>
      </p>
    </button>
  );
};

export default EventCard;
