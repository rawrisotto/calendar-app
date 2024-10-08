"use client";

import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";

const Calendar = () => {
  // Get the current data
  const today = startOfToday();
  // Get the current month
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMMM yyyy"));
  // Get the first day of the month
  const firstDayCurrentMonth = parse(currentMonth, "MMMM yyyy", new Date());
  // Get the days in the current month
  let days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  // handleNextMonth
  const handleNextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMMM yyyy"));
  };

  // handlePrevMonth
  const handlePrevMonth = () => {
    const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "MMMM yyyy"));
  };

  return (
    <div className="w-[400px] mx-auto rounded-md border-[1px] border-black h-fit">
      {/* Month, Prev, Next */}
      <div className="flex items-center border-b-[1px] p-4">
        <h2 className="font-semibold text-gray-900 flex-auto">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          type="button"
          onClick={handlePrevMonth}
          className="text-gray-400 hover:text-gray-500 p-1.5 text-sm"
        >
          PREV
        </button>
        <button
          type="button"
          onClick={handleNextMonth}
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
      <div className="grid grid-cols-7 mt-2 text-center">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={`text-gray-300 ${
              dayIdx > 6 ? "border-t border-gray-200" : null
            }`}
          >
            <button
              type="button"
              //   onClick={() => handleDateChange(day)}
              className={`aspect-square w-8 my-1 rounded-full hover:bg-gray-200 
                      ${
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "font-semibold text-gray-600"
                      }
                      ${isToday(day) && "text-red-500"} 
                      `}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
