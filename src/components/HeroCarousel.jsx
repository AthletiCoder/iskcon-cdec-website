import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const slides = [
    {
      image: "/images/rmm.jpg",
      title: "Experience Divine Culture",
      desc: "Join us for weekly spiritual gatherings and soulful kirtans.",
      cta: { label: "Explore Programs", link: "/events" },
    },
    {
      image: "/images/hero.jpg",
      title: "Bhagavad Gita for Life",
      desc: "Unlock timeless wisdom with our guided Gita sessions.",
      cta: { label: "Join a Class", link: "/gita" },
    },
    {
      image: "/images/hero.jpg",
      title: "Serve with Compassion",
      desc: "Be a part of our food distribution and service projects.",
      cta: { label: "View Seva Opportunities", link: "/service" },
    },
  ];

  return (
    <div className="relative px-2 sm:px-8 max-w-8xl mx-auto">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={5000}
        transitionTime={800}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="shadow-2xl relative justify-center flex overflow-hidden rounded-lg max-h-[550px]">
            <img className="h-full object-cover w-full" src={slide.image} alt={slide.title}/>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg sm:text-xl mb-6 max-w-2xl">{slide.desc}</p>
              <Link
                to={slide.cta.link}
                className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition"
              >
                {slide.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;