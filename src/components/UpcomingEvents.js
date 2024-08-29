import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
export default function Labels({ day }) {
  const [dayEvents, setDayEvents] = useState([]);
  // const { labels, updateLabel} = useContext(GlobalContext);

  const {
    filteredEvents,
    setSelectedEvent,
    daySelected,
    setShowEventModal
  } = useContext(GlobalContext);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const events = filteredEvents
      .filter(evt => dayjs(evt.day).isAfter(dayjs(), 'day') || dayjs(evt.day).isSame(dayjs(), 'day'))
      .sort((a, b) => dayjs(a.day).diff(dayjs(b.day)));
    setUpcomingEvents(events);
  }, [filteredEvents]);

  return (
    <React.Fragment>
      <p className="mt-10 font-bold text-[#0F4C81]">Upcoming Events</p>
      <p class="text-sm">{daySelected.format("dddd, MMMM DD")}</p>
      <p>{upcomingEvents.length > 0 ? (
        upcomingEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedEvent(evt);
              setShowEventModal(true);
            }}
            className={`flex items-center bg-${evt.label}-200 p-1 my-1 shadow-md text-gray-700 rounded-lg text-xs font-semibold cursor-pointer`}
          >
            <span className="inline-block h-10 w-1 bg-blue-700 mr-1 flex-shrink-0"></span>
            {evt.title}
          </div>
        ))
      ) : (
        <p>No upcoming events.</p>
      )}
      </p>
      {/* {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))} */}
    </React.Fragment>
  );
}
