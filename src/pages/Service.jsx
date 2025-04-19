const services = [
    {
      title: "Kitchen Seva",
      image: "/images/bhagavadgita.png",
      description:
        "Help prepare and distribute sanctified vegetarian meals for devotees and guests.",
      link: "https://wa.me/919812345678",
    },
    {
      title: "Temple Decoration",
      image: "/images/bhagavadgita.png",
      description:
        "Assist in decorating the temple for festivals, events, and daily darshan.",
      link: "https://wa.me/919812345678",
    },
    {
      title: "Bhagavad Gita Teaching Support",
      image: "/images/bhagavadgita.png",
      description:
        "Support facilitators in organizing and coordinating Gita study sessions.",
      link: "https://wa.me/919812345678",
    },
    {
      title: "Social Media & Content",
      image: "/images/bhagavadgita.png",
      description:
        "Help spread Krishna's message through digital outreach and content creation.",
      link: "https://wa.me/919812345678",
    },
  ];
  
  export default function Service() {
    return (
      <div className="p-20 min-h-screen text-orange-600">
        <h1 className="text-3xl font-bold text-center mb-5">Serve with Us</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
          
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          
                {/* Content */}
                <div className="absolute bottom-0 p-4 text-white z-10">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm mt-1">{service.description}</p>
                  <button className="mt-3 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-sm rounded shadow">
                    Get Involved
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    );
  }
  