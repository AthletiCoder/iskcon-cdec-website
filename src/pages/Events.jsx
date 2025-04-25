import { motion } from "framer-motion";

const programs = [
  {
    title: "Gita for Youth",
    description: "A dynamic session uncovering the Gita’s secrets for clarity, confidence and inner strength.",
    date: "Apr 20, 2025",
    image: "/images/events/gita.png",
    detailsLink: "#",
    speaker: {
      name: "Radheshyam Das",
      role: "Spiritual Mentor",
      photo: "/images/speakers/rsp.jpg"
    }
  },
  {
    title: "Mind Management Workshop",
    description: "Learn ancient techniques to master your mind in modern challenges.",
    date: "Apr 27, 2025",
    image: "/images/events/gita.png",
    detailsLink: "#",
    speaker: {
      name: "Avelo Roy",
      role: "Entrepreneur & Gita Coach",
      photo: "/images/speakers/rsp.jpg"
    }
  },
  {
    title: "Bhagavatam Study Circle",
    description: "Deep-dive into the Bhagavatam’s timeless stories and profound life lessons.",
    date: "May 5, 2025",
    image: "/images/events/gita.png",
    detailsLink: "#",
    speaker: {
      name: "Niranjan Pendharkar",
      role: "Srimad Bhagavatam Facilitator",
      photo: "/images/speakers/rsp.jpg"
    }
  }
];

const Events = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-12">Upcoming Events</h1>

      <div className="relative max-w-4xl mx-auto border-l-4 border-orange-200">
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-12 ml-6 relative"
          >
            {/* Dot */}
            <div className="w-4 h-4 bg-orange-600 rounded-full absolute -left-3 top-0.5"></div>

            {/* Date */}
            <div className="absolute -left-32 top-0 text-sm text-gray-100 hidden md:block">
              {program.date}
            </div>

            {/* Card */}
            <div className="glasmorphic p-6 rounded-xl border border-white/20 hover:shadow-2xl transition duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full md:w-1/3 h-48 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">{program.title}</h3>
                  <p className="dark:text-gray-200 mb-4">{program.description}</p>

                  {/* Speaker */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={program.speaker.photo}
                      alt={program.speaker.name}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <p className="text-sm font-semibold text-black dark:text-gray-100">{program.speaker.name}</p>
                      <p className="text-xs text-black dark:text-gray-300">{program.speaker.role}</p>
                    </div>
                  </div>

                  <a
                    href={program.detailsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 text-sm"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;