"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import EventForm from "@components/EventForm";

const page = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  return (
    <div className="w-96">
      <h1 className="text-3xl font-bold mb-4">Calendar App</h1>
      <EventForm operation={"Add"} selectedDate={date} />
    </div>
  );
};

export default page;
