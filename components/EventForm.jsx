"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const EventForm = ({ operation, selectedDate }) => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // // const [values, setValues] = useState({ date: selectedDate, event: "" });
  // const [values, setValues] = useState({
  //   event: "",
  //   startDate: selectedDate,
  //   endDate: selectedDate,
  //   startTime: "",
  //   endTime: "",
  // });
  // const [error, setError] = useState(null);

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const validateEvent = (values) => {
  //   if (!values.event) {
  //     setError("Please enter an event");
  //   }
  //   return null;
  // };

  const onSubmit = async (data) => {
    const body = {
      title: data.title,
      startDateTime: `${data.startDate}T${data.startTime}`,
      endDateTime: `${data.endDate}T${data.endTime}`,
    };
    setSubmitting(true);

    try {
      const res = await fetch("/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Event */}
      <div className="relative">
        <input
          className={
            "border-[1px] border-solid px-4 w-96 h-12 rounded-md bg-transparent transition-all duration-300 peer focus:outline-blue-400" +
            (errors.title ? " border-red-500" : " border-gray-400")
          }
          type="text"
          id="title"
          name="title"
          {...register("title", {
            required: "Please enter the title of the event",
          })}
        />
        <label
          className={
            "absolute left-4 bg-neutral-100 font-bold z-10 cursor-text px-3 transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400" +
            (watch("title") ? " -top-3 text-sm" : " top-3")
          }
          htmlFor="title"
        >
          Enter Event
        </label>
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Date */}
      <div className="flex gap-2">
        <div className="relative w-full">
          <input
            className={
              "border-[1px] border-solid px-4 w-full h-12 rounded-md bg-transparent transition-all duration-300 peer focus:outline-blue-400" +
              (errors.startDate ? " border-red-500" : " border-gray-400")
            }
            name="startDate"
            id="startDate"
            type="date"
            {...register("startDate", {
              required: "Please enter the start date",
            })}
          />
          <label
            className="absolute left-4 -top-3 bg-neutral-100 px-3 font-bold text-sm"
            htmlFor="startDate"
          >
            Start Date
          </label>
          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate.message}</p>
          )}
        </div>

        <div className="relative w-full">
          <input
            className={
              "border-[1px] border-solid px-4 w-full h-12 rounded-md bg-transparent transition-all duration-300 peer focus:outline-blue-400" +
              (errors.endDate ? " border-red-500" : " border-gray-400")
            }
            name="endDate"
            id="endDate"
            type="date"
            {...register("endDate", { required: "Please enter the end date" })}
          />
          <label
            className="absolute left-4 -top-3 bg-neutral-100 px-3 font-bold text-sm"
            htmlFor="endDate"
          >
            End Date
          </label>
          {errors.endDate && (
            <p className="text-red-500 text-sm">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      {/* Time */}
      <div className="flex gap-2">
        <div className="relative w-full">
          <input
            className={
              "border-[1px] border-solid px-4 w-full h-12 rounded-md bg-transparent transition-all duration-300 peer focus:outline-blue-400" +
              (errors.startTime ? " border-red-500" : " border-gray-400")
            }
            type="time"
            id="startTime"
            name="startTime"
            {...register("startTime", {
              required: "Please enter the start time",
            })}
          />
          <label
            className="absolute left-4 -top-3 bg-neutral-100 px-3 font-bold text-sm"
            htmlFor="startTime"
          >
            Start Time
          </label>
          {errors.startTime && (
            <p className="text-red-500 text-sm">{errors.startTime.message}</p>
          )}
        </div>

        <div className="relative w-full">
          <input
            className={
              "border-[1px] border-solid px-4 w-full h-12 rounded-md bg-transparent transition-all duration-300 peer focus:outline-blue-400" +
              (errors.endTime ? " border-red-500" : " border-gray-400")
            }
            type="time"
            id="endTime"
            name="endTime"
            {...register("endTime", { required: "Please enter the end time" })}
          />
          <label
            className="absolute left-4 -top-3 bg-neutral-100 px-3 font-bold text-sm"
            htmlFor="endTime"
          >
            End Time
          </label>
          {errors.endTime && (
            <p className="text-red-500 text-sm">{errors.endTime.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn border-blue-100 bg-blue-100 hover:bg-blue-400 hover:text-neutral-100 disabled:opacity-50"
      >
        {operation} Event
      </button>
    </form>
  );
};

export default EventForm;
