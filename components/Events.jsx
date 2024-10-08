import React from "react";
import { format } from "date-fns";

const Events = ({ selectedDate }) => {
  return (
    <aside>
      <h3 className="text-xl font-semibold">{format(selectedDate, "eeee")}</h3>
      <h2 className="text-2xl font-semibold">{format(selectedDate, "MMMM d")}</h2>
    </aside>
  );
};

export default Events;
