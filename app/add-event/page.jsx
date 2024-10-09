"use client";

import EventForm from "@components/EventForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const createEvent = async (data) => {
    setSubmitting(true);
    const body = {
      title: data.title,
      startDateTime: `${data.startDate}T${data.startTime}`,
      endDateTime: `${data.endDate}T${data.endTime}`,
    };

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
  }

  return (
    <div className="w-96">
      <h1 className="text-3xl font-bold mb-4">Calendar App</h1>
      <EventForm operation={"Add"} submitting={submitting} onSubmit={createEvent} />
    </div>
  );
};

export default page;
