import { useState } from "react";

const sundaySchedule = [
  { time: "5:00 PM", activity: "Bhajans" },
  { time: "6:00 PM", activity: "Spiritual Discourse" },
  { time: "7:30 PM", activity: "Aarti & Kirtan" },
  { time: "8:00 PM", activity: "Prasadam (Dinner)" },
];

const weekdaySchedule = [
  { time: "4:30 AM", activity: "Mangala Aarti" },
  { time: "5:15 AM", activity: "Japa Meditation" },
  { time: "7:15 AM", activity: "Darshan Aarti" },
  { time: "7:45 AM", activity: "Guru Puja" },
  { time: "8:00 AM", activity: "Srimad Bhagavatam Class" },
  { time: "9:00 AM", activity: "Breakfast Prasadam" },
];

const Schedule = () => {
  const [tab, setTab] = useState("sunday");
  const schedule = tab === "sunday" ? sundaySchedule : weekdaySchedule;

  return (
    <div className="min-h-screen pt-28 px-4 text-white">
      <h1 className="text-3xl font-bold text-center text-orange-400 mb-10">Temple Schedule</h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setTab("sunday")}
          className={`px-5 py-2 rounded-full font-medium border transition-all duration-200 ${
            tab === "sunday"
              ? "bg-orange-500 text-white shadow-md"
              : "bg-white/10 text-white border-white/20"
          }`}
        >
          Sunday
        </button>
        <button
          onClick={() => setTab("weekday")}
          className={`px-5 py-2 rounded-full font-medium border transition-all duration-200 ${
            tab === "weekday"
              ? "bg-orange-500 text-white shadow-md"
              : "bg-white/10 text-white border-white/20"
          }`}
        >
          Monday – Saturday
        </button>
      </div>

      <div className="max-w-md mx-auto glasmorphic p-6 rounded-xl shadow space-y-4">
        {schedule.map((item, idx) => (
          <div key={idx} className="flex justify-between border-b border-white/10 pb-2">
            <span className="font-medium">{item.time}</span>
            <span>{item.activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;