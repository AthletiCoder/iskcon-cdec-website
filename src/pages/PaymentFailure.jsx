import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentFailurePage = () => {
  const location = useLocation();
  const [errorDetails, setErrorDetails] = useState(null);

  useEffect(() => {
    // Easebuzz might send details back as query parameters
    const params = new URLSearchParams(location.search);
    const txnid = params.get('txnid'); // Example: get transaction ID
    const status = params.get('status'); // Example: get status
    const error_message = params.get('error_message'); // Example: get error message

    if (txnid || status || error_message) {
      setErrorDetails({ txnid, status, error_message });
    }

    console.log("Client-side payment failure detected.");
    console.log("Easebuzz response params (client-side):", { txnid, status, error_message });

    // Optional: Log this error on your backend for analysis
    // E.g., logPaymentFailure(txnid, error_message);
  }, [location.search]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-red-600">
          ❌ Payment Failed
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          We're sorry, your donation could not be processed at this time.
        </p>

        {errorDetails && (
          <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50 text-left text-sm text-gray-700">
            <p><strong>Transaction ID:</strong> {errorDetails.txnid || 'N/A'}</p>
            <p><strong>Status:</strong> <span className="capitalize">{errorDetails.status || 'N/A'}</span></p>
            <p><strong>Error Message:</strong> {errorDetails.error_message || 'No specific error message provided.'}</p>
          </div>
        )}

        <div className="mt-6">
          <Link
            to="/donate"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Try Donating Again
          </Link>
          <Link
            to="/"
            className="mt-3 group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailurePage;