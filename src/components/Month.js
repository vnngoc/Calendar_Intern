import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="mt-1 mr-10 ml-10 flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i}

            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
