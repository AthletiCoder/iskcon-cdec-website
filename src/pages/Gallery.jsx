  const images = [
    "/images/events/event1.jpg",
    "/images/events/event2.jpg",
    "/images/events/event3.jpg",
    "/images/events/event4.jpg",
    "/images/events/event5.jpg",
    "/images/events/event6.jpg",
  ];
  
  export default function Gallery() {
    return (
      <div className="pt-28 px-6 text-white min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="glasmorphic overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  