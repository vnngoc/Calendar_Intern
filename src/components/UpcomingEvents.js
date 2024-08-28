import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
export default function Labels({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);

  const { labels, updateLabel, daySelected } = useContext(GlobalContext);
  const calendarEvent = {
    day: daySelected.valueOf(),
  };
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);
  return (
    <React.Fragment>
      <p className="mt-10 font-bold text-[#0F4C81]">Upcoming Events</p>
      <p>{daySelected.format("dddd, MMMM DD")}</p>
      <br />
      <p>{dayEvents.map((evt, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedEvent(evt)}
          className={`flex items-center bg-${evt.label}-200 p-1 mr-3 text-gray-700 text-sm rounded mb-1 truncate`}
        >
          <div className="whitespace-nowrap">
            <span className="inline-block h-6 w-1 bg-blue-700 mr-2"></span>
          </div>

          {evt.title}
        </div>
      ))}</p>
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
