import { useState } from "react";

const items = [
  { id: 1, title: "Hackathon", desc: "Build and innovate in 24 hours." },
  { id: 2, title: "Robotics", desc: "Show off your bot-building skills." },
  {
    id: 3,
    title: "AI Summit",
    desc: "Explore the future of artificial intelligence.",
  },
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Highlights</h2>
      <div className="relative w-full max-w-md">
        <div className="bg-gray-900/80 border border-gray-700 p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-yellow-300">
            {items[current].title}
          </h3>
          <p className="mt-3 text-gray-300">{items[current].desc}</p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg"
            onClick={() =>
              setCurrent((current - 1 + items.length) % items.length)
            }
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg"
            onClick={() => setCurrent((current + 1) % items.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
