"use client";

import { useState } from "react";

const EventForm = ({ operation, selectedDate }) => {
  const [values, setValues] = useState({ date: selectedDate, event: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateEvent = (values) => {
    if (!values.event) {
      setError("Please enter an event");
    }
    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    validateEvent(values);
    console.log(values);
  };

  return (
    <form className="grid gap-6" onSubmit={onSubmit}>
      {/* Date */}
      <div className="relative">
        <input
          className="w-96 h-12 resize-none border-[1px] border-solid rounded-md bg-transparent px-4 py-4 outline-none"
          name="date"
          id="date"
          type="text"
          readOnly
          value={values.date}
        />
        <label
          className="absolute left-4 -top-3 bg-neutral-100 px-3 font-bold text-sm"
          htmlFor="date"
        >
          Date
        </label>
      </div>

      {/* Event */}
      <div className="relative">
        <input
          className={
            "border-[1px] border-solid px-4 w-96 h-12 rounded-sm bg-transparent transition-all duration-300 peer focus:outline-blue-400" +
            (error ? " border-red-500" : " border-gray-400")
          }
          type="text"
          id="event"
          name="event"
          value={values.event}
          onChange={handleChange}
        />
        <label
          className={
            "absolute left-4 bg-neutral-100 font-bold z-10 cursor-text px-3 transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400" +
            (values.event ? " -top-3 text-sm" : " top-3")
          }
          htmlFor="event"
        >
          Enter Event
        </label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <button
        type="submit"
        className="btn border-blue-100 bg-blue-100 hover:bg-blue-400 hover:text-neutral-100"
      >
        {operation} Event
      </button>
    </form>
  );
};

export default EventForm;
