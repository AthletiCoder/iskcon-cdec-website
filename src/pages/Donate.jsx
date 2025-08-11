import React, { useState } from 'react'; // useEffect is not strictly needed for this pattern, but useState is crucial

const Donate = () => {
  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  // State for Easebuzz payment logic
  const [accessKey, setAccessKey] = useState(null); // Stores the access_key received from backend
  const [loading, setLoading] = useState(false);   // Indicates if an API call is in progress
  const [paymentStatus, setPaymentStatus] = useState(''); // Displays messages to the user

  // Function to fetch the access_key from your backend
  const fetchAccessKey = async (donationDetails) => {
    setLoading(true);
    setPaymentStatus('Initiating payment...');
    try {
      // This URL will be proxied to your backend (e.g., http://localhost:5000/api/generate-easebuzz-accesskey)
      const response = await fetch('http://localhost:5000/api/generate-easebuzz-accesskey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If your backend requires authentication tokens (e.g., JWT), add them here:
          // 'Authorization': `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify(donationDetails),
      });

      console.log(response);

      if (!response.ok) {
        // Attempt to read error message from backend response
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === 'success' && data.access_key) {
        setAccessKey(data.access_key); // Store the received access_key
        setLoading(false);
        setPaymentStatus(''); // Clear status message once key is fetched
        return data.access_key; // Return the access key for immediate use
      } else {
        throw new Error(data.message || 'Failed to get access key from Easebuzz (unexpected response).');
      }

    } catch (error) {
      console.error('Error fetching access_key:', error);
      setPaymentStatus(`Payment initiation failed: ${error.message || 'Please try again.'}`);
      setLoading(false);
      return null;
    }
  };

  // Function to handle the actual payment initiation via Easebuzz iFrame
  const handleEasebuzzPayment = (key) => {
    // Check if the EaseCheckout function is loaded from the SDK script
    if (!key || typeof window.EaseCheckout !== 'function') {
      console.error('EaseCheckout not ready or access key missing. Ensure SDK script is loaded in public/index.html.');
      setPaymentStatus('Payment system not ready. Please refresh or try again.');
      return;
    }

    const options = {
      access_key: key, // Use the access_key obtained from your backend
      onResponse: (response) => {
        // This callback is triggered when the payment process completes (success/failure/cancel)
        console.log('Easebuzz Response:', response);
        if (response.status === 'success') {
          setPaymentStatus('Payment successful! Your donation is being processed.');
          // IMPORTANT: You MUST verify this payment status on your backend
          // using Easebuzz's server-to-server webhook or query API for security.
          // Do NOT rely solely on client-side response for order fulfillment.
          // You might trigger a redirect to your /payment-success page here,
          // though Easebuzz will automatically redirect based on 'surl' in your backend.
        } else if (response.status === 'user_cancelled') {
          setPaymentStatus('Payment cancelled by you.');
        } else {
          setPaymentStatus(`Payment failed: ${response.error_message || 'Unknown error. Please try again.'}`);
        }
        // It's good practice to reset the access key after a payment attempt
        // so a new one is fetched for subsequent donations.
        setAccessKey(null);
      },
      // Optional: Customize the theme or other options as per Easebuzz documentation
      // You can pass the same theme color as your main brand color
      theme: '#E65100', // Example: ISKCON orange
    };

    // Open the Easebuzz iFrame checkout
    window.EaseCheckout.open(options);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default browser form submission

    // Basic client-side validation
    if (!fullName.trim() || !email.trim() || !amount || parseFloat(amount) <= 0) {
      setPaymentStatus('Please fill in all details correctly (Name, Email, and a positive Amount).');
      return;
    }

    // Prepare donation details to send to your backend
    const donationDetails = {
      fullName: fullName.trim(),
      email: email.trim(),
      amount: parseFloat(amount), // Convert to number for backend validation
      // You can add more details here if your backend or Easebuzz requires them
      // e.g., 'address', 'phone', 'product_name': 'ISKCON CDEC Donation', etc.
    };

    console.log(donationDetails);

    // 1. Get access key from your backend
    const fetchedKey = await fetchAccessKey(donationDetails);

    // 2. If access key is successfully fetched, proceed to Easebuzz iFrame
    if (fetchedKey) {
      handleEasebuzzPayment(fetchedKey);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">Support ISKCON CDEC</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Donation Form */}
        <div className="glasmorphic max-w-3xl text-center p-10 text-white">
          <h2 className="text-xl font-semibold text-white mb-4">Make a Donation</h2>

          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm text-gray-100 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-500 rounded px-3 py-2 text-gray-100"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-100 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-500 rounded px-3 py-2 text-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm text-gray-100 mb-1">Amount (INR)</label>
              <input
                type="number"
                id="amount"
                className="w-full border border-gray-500 rounded px-3 py-2 text-gray-100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="1" // Ensure a positive minimum amount
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-all"
              disabled={loading} // Disable button while API call or payment processing
            >
              {loading ? 'Processing Payment...' : 'Proceed to Pay'}
            </button>

            {/* Display payment status messages */}
            {paymentStatus && (
              <p className={`text-center mt-4 text-sm ${paymentStatus.includes('failed') || paymentStatus.includes('cancelled') ? 'text-red-300' : 'text-green-300'}`}>
                {paymentStatus}
              </p>
            )}
          </form>

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