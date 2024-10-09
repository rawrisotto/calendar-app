import React from "react";
import EventTracker from "@components/EventTracker";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="text-3xl font-bold mb-4">Calendar App</h1>
      </Link>
      <EventTracker />
    </div>
  );
};

export default Home;
