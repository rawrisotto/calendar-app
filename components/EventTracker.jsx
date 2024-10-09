"use client";

import { useState } from "react";
import {
  isSameDay,
  parseISO,
  startOfToday,
  isSameMonth,
  format,
  isWithinInterval,
  parse,
} from "date-fns";
import Calendar from "./Calendar";
import Events from "./Events";

const events = [
  {
    id: 1,
    title: "Learn NextJS",
    startDateTime: "2024-10-10T10:00",
    endDateTime: "2024-10-10T12:00",
  },
  {
    id: 2,
    title: "Learn React",
    startDateTime: "2024-10-10T13:00",
    endDateTime: "2024-10-10T15:00",
  },
  {
    id: 3,
    title: "Learn Docker",
    startDateTime: "2024-10-11T13:00",
    endDateTime: "2024-10-11T15:00",
  },
  {
    id: 4,
    title: "Learn Kubernetes",
    startDateTime: "2024-11-11T13:00",
    endDateTime: "2024-11-11T15:00",
  },
  {
    id: 5,
    title: "TEST",
    startDateTime: "2024-11-11T13:00",
    endDateTime: "2024-11-13T15:00",
  },
];

const EventTracker = () => {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(
    format(today, "MMMM yyyy")
  );

  // Handle date change when a date is selected on the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // handleNextMonth
  const handleNextMonth = (firstDayNextMonth) => {
    setSelectedMonth(format(firstDayNextMonth, "MMMM yyyy"));
  };

  // handlePrevMonth
  const handlePrevMonth = (firstDayPrevMonth) => {
    setSelectedMonth(format(firstDayPrevMonth, "MMMM yyyy"));
  };

  // Filter events based on the selected date
  const filteredEventsByDate = events.filter((event) => {
    return (
      isWithinInterval(selectedDate, {
        start: parseISO(event.startDateTime),
        end: parseISO(event.endDateTime),
      }) || isSameDay(parseISO(event.startDateTime), selectedDate)
    );
  });

  // Filter events based on the selected month
  const filteredEventsByMonth = events.filter((event) => {
    return isSameMonth(parseISO(event.startDateTime), selectedMonth);
  });

  return (
    <div className="grid grid-cols-2 gap-4 divide-x-2">
      <Calendar
        today={today}
        selectedDate={selectedDate}
        currentMonth={selectedMonth}
        handleDateChange={handleDateChange}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
        events={filteredEventsByMonth}
      />
      <Events selectedDate={selectedDate} events={filteredEventsByDate} />
    </div>
  );
};

export default EventTracker;
