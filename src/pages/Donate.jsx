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
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/donate/annamrita.jpg" alt="Annamrita" className="rounded-lg shadow-md" />
          <img src="/images/donate/youth.jpg" alt="Youth Program" className="rounded-lg shadow-md" />
          <img src="/images/donate/temple.jpg" alt="Temple Maintenance" className="rounded-lg shadow-md" />
          <img src="/images/donate/volunteers.jpg" alt="Volunteers" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Donate;
