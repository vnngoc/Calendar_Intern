import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./UpcomingEvents";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64 mt-1">
      <SmallCalendar />
      <br />
      <hr />
      <br />
      <CreateEventButton />

      <Labels />
    </aside>
  );
}
