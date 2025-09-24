import React from "react";

const programsData = {
  day1: [
    { time: "10:00 AM", event: "Opening Ceremony" },
    { time: "11:00 AM", event: "Workshop 1" },
  ],
  day2: [
    { time: "10:00 AM", event: "Panel Discussion" },
    { time: "01:00 PM", event: "Workshop 2" },
  ],
  day3: [
    { time: "09:00 AM", event: "Keynote" },
    { time: "12:00 PM", event: "Closing Ceremony" },
  ],
};

function DayPrograms({ day }) {
  const programs = programsData[day];

  if (!programs) {
    return (
      <div className="p-10 text-center text-red-400 font-bold">
        Programs for "{day}" not found
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 capitalize">{day} Programs</h2>
      <ul className="space-y-3">
        {programs.map((p, i) => (
          <li
            key={i}
            className="bg-gray-800 p-4 rounded-md border border-gray-700"
          >
            <span className="font-mono text-cyan-300">{p.time}</span> -{" "}
            <span className="font-semibold">{p.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DayPrograms;
