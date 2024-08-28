import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="flex items-center justify-center p-2 border rounded-lg shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create event" className="w-5 h-5" />
    </button>
  );
}
