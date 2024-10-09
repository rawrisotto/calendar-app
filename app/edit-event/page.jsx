"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EventForm from "@components/EventForm";
import Link from "next/link";

const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const [data, setData] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/event/${id}`);
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  const updateEvent = async (data) => {
    setSubmitting(true);
    const body = {
      title: data.title,
      startDateTime: `${data.startDate}T${data.startTime}`,
      endDateTime: `${data.endDate}T${data.endTime}`,
    };

    try {
      const res = await fetch(`/api/event/${id}`, {
        method: "PUT",
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

  const deleteEvent = async () => {
    setSubmitting(true);

    try {
      const res = await fetch(`/api/event/${id}`, {
        method: "DELETE",
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
    <div className="w-96">
      <Link href="/">
        <h1 className="text-3xl font-bold mb-4">Calendar App</h1>
      </Link>
      <EventForm
        operation={"Update"}
        event={data}
        submitting={submitting}
        onSubmit={updateEvent}
        onDelete={deleteEvent}
      />
    </div>
  );
};

export default page;
