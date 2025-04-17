const Donate = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">Support ISKCON CDEC</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Donation Form */}
        <div className="glasmorphic max-w-3xl text-center p-10 text-white">
          <h2 className="text-xl font-semibold text-white mb-4">Make a Donation</h2>

          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm text-gray-100 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-500 rounded px-3 py-2" required />
            </div>

            <div>
              <label className="block text-sm text-gray-100 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-500 rounded px-3 py-2" required />
            </div>

            <div>
              <label className="block text-sm text-gray-100 mb-1">Amount (INR)</label>
              <input type="number" className="w-full border border-gray-500 rounded px-3 py-2" required />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-all"
            >
              Proceed to Pay
            </button>
          </form>

          {/* UPI QR Code */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-100 mb-2">Prefer UPI?</p>
            <img src="/qr.png" alt="UPI QR Code" className="mx-auto w-40 rounded" />
          </div>
        </div>

        {/* Right: Image Collage */}
        {/* Photos with captions */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {[
            {
              title: "Food Distribution",
              desc: "Feeding hundreds with sanctified meals daily.",
              img: "/images/donate/annamrita.png"
            },
            {
              title: "Youth Sessions",
              desc: "Empowering students with values and purpose.",
              img: "/images/donate/temple.png"
            },
            {
              title: "Temple Maintenance",
              desc: "Maintaining the sacred atmosphere for all.",
              img: "/images/donate/youth.png"
            },
            {
              title: "Volunteers",
              desc: "Maintaining the sacred atmosphere for all.",
              img: "/images/donate/volunteers.png"
            }
          ].map((item, idx) => (
            <div key={idx} className="glasmorphic rounded overflow-hidden shadow-sm bg-white">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-100">{item.title}</h4>
                <p className="text-sm text-gray-400 ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Donate;
