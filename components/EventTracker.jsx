"use client";

import { useState, useEffect } from "react";
import {
  isSameDay,
  parseISO,
  startOfToday,
  isSameMonth,
  format,
  isWithinInterval,
} from "date-fns";
import Calendar from "./Calendar";
import Events from "./Events";

const EventTracker = () => {
  const today = startOfToday();
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/event");
      const data = await res.json();
      setEvents(data);
    };

    fetchData();
  }, []);

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
