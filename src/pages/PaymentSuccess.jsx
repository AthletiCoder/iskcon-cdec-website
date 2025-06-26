import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation to read query params

const PaymentSuccessPage = () => {
  const location = useLocation();
  const [transactionDetails, setTransactionDetails] = useState(null);

  useEffect(() => {
    // Easebuzz might send details back as query parameters
    const params = new URLSearchParams(location.search);
    const txnid = params.get('txnid'); // Example: get transaction ID
    const status = params.get('status'); // Example: get status
    const amount = params.get('amount'); // Example: get amount

    if (txnid || status || amount) {
      setTransactionDetails({ txnid, status, amount });
    }

    // IMPORTANT:
    // This client-side success is NOT a final confirmation.
    // You MUST verify the payment status on your backend using Easebuzz's
    // server-to-server webhook or querying their API with the txnid.
    // Only after server-side verification should you fulfill the order/donation.
    console.log("Client-side payment success detected.");
    console.log("Easebuzz response params (client-side):", { txnid, status, amount });

    // Optional: You could make another API call to your backend here
    // to trigger server-side verification if a webhook isn't sufficient or immediate.
    // E.g., verifyPaymentStatus(txnid);
  }, [location.search]); // Re-run if query params change

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-green-600">
          🎉 Payment Successful!
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for your generous donation to ISKCON CDEC.
        </p>

        {transactionDetails && (
          <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50 text-left text-sm text-gray-700">
            <p><strong>Transaction ID:</strong> {transactionDetails.txnid || 'N/A'}</p>
            <p><strong>Status:</strong> <span className="capitalize">{transactionDetails.status || 'N/A'}</span></p>
            <p><strong>Amount:</strong> ₹{transactionDetails.amount || 'N/A'}</p>
            <p className="mt-2 text-xs text-gray-500">
              *Your donation is being processed. A final confirmation will be sent via email.
            </p>
          </div>
        )}

        <div className="mt-6">
          <Link
            to="/"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Go to Home
          </Link>
          <Link
            to="/donate"
            className="mt-3 group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Donate Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;