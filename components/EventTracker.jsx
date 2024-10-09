"use client";

import { useState, useEffect } from "react";
import { startOfToday } from "date-fns";
import Calendar from "./Calendar";
import Events from "./Events";

const EventTracker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = startOfToday();

  // Handle date change when a date is selected on the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Set the selected date to today on initial render
  useEffect(() => {
    setSelectedDate(today);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 divide-x-2">
      <Calendar
        today={today}
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <Events selectedDate={selectedDate} />
    </div>
  );
};

export default EventTracker;
