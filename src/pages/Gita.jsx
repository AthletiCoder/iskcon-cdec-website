import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GitaMap from "../components/GitaMap";


const Gita = () => {
  const programs = [
    {
        title: "Gita Fundamentals",
        description: "Another wonderful program right near your home",
        location: "Address",
        image: "/images/bhagavadgita.png",
        time: "",
        speaker: {
            name: "HG Priya Gopesh Prabhu",
            role: "Bhagavad Gita Facilitator",
            photo: "/images/speakers/prgp.jpg"
        },
        whatsapp: "https://wa.me/919876543210"
    },
    {
        title: "Discover Yourself",
        description: "Another wonderful program right near your home",
        location: "Address",
        image: "/images/bhagavadgita.png",
        speaker: {
            name: "HG Priya Gopesh Prabhu",
            role: "Bhagavad Gita Facilitator",
            photo: "/images/speakers/prgp.jpg"
        },
        time: "",
        whatsapp: "https://wa.me/919876543210"
    },    {
        title: "Discover Yourself",
        description: "Another wonderful program right near your home",
        location: "Address",
        image: "/images/bhagavadgita.png",
        speaker: {
            name: "HG Sarvasakshi Krishna Prabhu",
            role: "Youth Mentor",
            photo: "/images/speakers/sskp.jpg"
        },
        time: "",
        whatsapp: "https://wa.me/919876543210"
    },
];


  return (
    <div className="pt-28 px-4 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-400">Learn Bhagavad Gita</h2>

        <p className="text-center text-slate-300 mb-10">
          Explore our weekly sessions that help you understand the timeless wisdom of the Gita in a practical, modern context.
        </p>

        <div className="glasmorphic p-6 rounded-xl mb-10">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
          >
            <div>
              <img src="/images/courses/gita1.png" alt="Gita Session 1" />
            </div>
            <div>
              <img src="/images/courses/gita2.png" alt="Gita Session 2" />
            </div>
            <div>
              <img src="/images/courses/gita3.png" alt="Gita Session 3" />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
                <div key={idx} className="glasmorphic shadow rounded-lg overflow-hidden transition hover:shadow-lg">
                    <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />

                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-orange-600 mb-2">{program.title}</h3>
                        <p className="text-gray-200 mb-4 text-xs">{program.description}</p>

                        {/* Speaker Info */}
                        <div className="flex items-center gap-4 mt-4">
                            <img
                            src={program.speaker.photo}
                            alt={program.speaker.name}
                            className="w-12 h-12 rounded-full object-cover border"
                            />
                            <div>
                                <p className="text-sm font-semibold text-gray-200">{program.speaker.name}</p>
                                <p className="text-xs text-gray-300">{program.speaker.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="my-8">
            <h3 className="text-xl font-semibold text-slate-300 mb-2">Our Class Locations</h3>
            <GitaMap />
        </div>

      </div>
    </div>
  );
};

export default Gita;
