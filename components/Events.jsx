import React from "react";
import { format } from "date-fns";

const Events = ({ selectedDate }) => {
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
      <button className="btn border-blue-100 bg-blue-100 hover:bg-blue-400 hover:text-neutral-100">
        Add Event
      </button>
    </aside>
  );
};

export default Events;
