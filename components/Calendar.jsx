import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  isWithinInterval,
  parse,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";

const Calendar = ({
  selectedDate,
  currentMonth,
  handleDateChange,
  handleNextMonth,
  handlePrevMonth,
  events,
}) => {
  // Get the first day of the month
  const firstDayCurrentMonth = parse(currentMonth, "MMMM yyyy", new Date());
  // Get the days in the current month
  let days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  return (
    <section className="w-[400px] mx-auto h-fit">
      {/* Month, Prev, Next */}
      <div className="flex items-center border-b-[1px] p-4">
        <h2 className="font-semibold text-gray-900 flex-auto">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          type="button"
          onClick={() => {
            const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
            handlePrevMonth(firstDayPrevMonth);
          }}
          className="text-gray-400 hover:text-gray-500 p-1.5 text-sm"
        >
          PREV
        </button>
        <button
          type="button"
          onClick={() => {
            const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
            handleNextMonth(firstDayNextMonth);
          }}
          className="text-gray-400 hover:text-gray-500 p-1.5 text-sm"
        >
          NEXT
        </button>
      </div>

      {/* Days of the week */}
      <div className="grid grid-cols-7 text-sm leading-6 text-center text-gray-500 py-2">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>

      {/* Days of the month */}
      <div className="grid grid-cols-7 text-center">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={`text-gray-300 py-2 ${
              dayIdx > 6 ? "border-t border-gray-200" : null
            }`}
          >
            <button
              type="button"
              onClick={() => handleDateChange(day)}
              className={`aspect-square w-8 my-1 rounded-full hover:bg-gray-200 
                      ${
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "font-semibold text-gray-600"
                      }
                      ${isToday(day) && "text-red-500"} 
                      ${
                        isEqual(day, selectedDate) &&
                        "bg-gray-700 text-white hover:bg-gray-700"
                      }
                      `}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
            {events.some(
              (event) =>
                isSameDay(parseISO(event.startDateTime), day) ||
                isWithinInterval(day, {
                  start: parseISO(event.startDateTime),
                  end: parseISO(event.endDateTime),
                })
            ) && (
              <div className="w-1 h-1 bg-sky-400 mx-auto rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Calendar;
