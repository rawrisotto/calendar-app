import { parseISO, format } from "date-fns";

const EventCard = ({ event }) => {
  const startDateTime = parseISO(event.startDateTime);
  const endDateTime = parseISO(event.endDateTime);

  return (
    <div
      className="border-b-[1px] py-2 px-4 hover:cursor-pointer"
      key={event.id}
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
    </div>
  );
};

export default EventCard;
