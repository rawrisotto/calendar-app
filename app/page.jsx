import React from 'react'
import EventTracker from '@components/EventTracker'

const Home = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4">Calendar App</h1>
        <EventTracker />
    </div>
  )
}

export default Home