import React, { useState, useEffect } from 'react';

const PaymentButton = () => {
  const [accessKey, setAccessKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  // Function to fetch the access_key from your backend
  const fetchAccessKey = async () => {
    setLoading(true);
    try {
      // Replace with your actual backend API endpoint
      const response = await fetch('/api/generate-easebuzz-accesskey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You might need to send user authentication tokens here
        },
        body: JSON.stringify({
          amount: 100.00, // Example amount
          currency: 'INR',
          // ... other necessary payment details like buyer info, product info etc.
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAccessKey(data.access_key);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching access_key:', error);
      setPaymentStatus('Failed to initiate payment. Please try again.');
      setLoading(false);
    }
  };

  // Function to handle the payment initiation
  const handlePayment = () => {
    if (!accessKey) {
      setPaymentStatus('Access key not available. Please try again.');
      return;
    }

    // Check if EaseCheckout is available (it should be if the script loaded)
    if (typeof window.EaseCheckout === 'function') {
      const options = {
        access_key: accessKey,
        onResponse: (response) => {
          // This callback is triggered when the payment process completes (success/failure)
          console.log('Easebuzz Response:', response);
          if (response.status === 'success') {
            setPaymentStatus('Payment successful!');
            // You should also verify this payment status on your backend
          } else {
            setPaymentStatus(`Payment failed: ${response.error_message || 'Unknown error'}`);
          }
        },
        theme: '#123456', // Optional: customize the theme
        // other options as per Easebuzz documentation
      };

      window.EaseCheckout.open(options);
    } else {
      console.error('EaseCheckout function not found. Ensure the script loaded correctly.');
      setPaymentStatus('Payment system not ready. Please refresh.');
    }
  };

  // Fetch access_key when the component mounts or when needed
  useEffect(() => {
    // You might want to fetch the access key only when the user clicks a button
    // or when the component is ready to display the payment option.
    // For simplicity, let's fetch it when component mounts here.
    // However, for real-world scenarios, fetch it closer to the payment trigger.
    // fetchAccessKey(); // Uncomment if you want to pre-fetch
  }, []);

  return (
    <div>
      <button onClick={fetchAccessKey} disabled={loading || accessKey}>
        {loading ? 'Generating Payment Link...' : (accessKey ? 'Proceed to Pay' : 'Generate Payment Link')}
      </button>

      {accessKey && (
        <button onClick={handlePayment} disabled={loading}>
          Pay Now
        </button>
      )}

      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default PaymentButton;