const services = [
    {
      title: "Kitchen Seva",
      description:
        "Help prepare and distribute sanctified vegetarian meals for devotees and guests.",
      link: "https://wa.me/919812345678",
    },
    {
      title: "Temple Decoration",
      description:
        "Assist in decorating the temple for festivals, events, and daily darshan.",
      link: "https://wa.me/919812345678",
    },
    {
      title: "Bhagavad Gita Teaching Support",
      description:
        "Support facilitators in organizing and coordinating Gita study sessions.",
      link: "https://wa.me/919812345678",
    },
    {
      title: "Social Media & Content",
      description:
        "Help spread Krishna's message through digital outreach and content creation.",
      link: "https://wa.me/919812345678",
    },
  ];
  
  export default function Service() {
    return (
      <div className="pt-28 px-4 min-h-screen text-white">
        <h1 className="text-3xl font-bold text-center mb-10">Serve with Us</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glasmorphic p-6 rounded-xl border border-white/20 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                {service.title}
              </h3>
              <p className="mb-4 text-slate-200">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Connect
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  