import React from "react";

const EventCard = ({ title, time }) => {
  return (
    <div className="border-b-[1px] py-2 px-4 hover:cursor-pointer">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-xs">{time}</p>
    </div>
  );
};

export default EventCard;
