require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const crypto = require('crypto'); // For generating hash

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes (adjust as needed for security)
app.use(express.json()); // Enable JSON body parsing

// Easebuzz API credentials from .env
const EASEBUZZ_API_KEY = process.env.EASEBUZZ_API_KEY;
const EASEBUZZ_SALT = process.env.EASEBUZZ_SALT;
const EASEBUZZ_INITIATE_PAYMENT_URL = process.env.EASEBUZZ_INITIATE_PAYMENT_URL;

// Function to generate the hash for Easebuzz
const generateEasebuzzHash = (data, salt) => {
    const dataString = `${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|${data.udf1}|${data.udf2}|${data.udf3}|${data.udf4}|${data.udf5}|${data.udf6}|${data.udf7}|${data.udf8}|${data.udf9}|${data.udf10}`;
    const hashString = `${EASEBUZZ_API_KEY}|${dataString}|${salt}`;
    return crypto.createHash('sha512').update(hashString).digest('hex');
};

// API Endpoint to generate access_key
app.post('/api/generate-easebuzz-accesskey', async (req, res) => {
    try {
        const { fullName, email, amount } = req.body; // Data from your React form

        // Generate a unique transaction ID (MUST be unique for each transaction)
        const txnid = 'TXN' + Date.now() + Math.random().toString(36).substring(2, 15);

        // Prepare parameters for Easebuzz Initiate Payment API
        const easebuzzParams = {
            txnid: txnid,
            amount: parseFloat(amount).toFixed(2), // Amount must be a string with 2 decimal places
            productinfo: 'ISKCON CDEC Donation', // General product info for the transaction
            firstname: fullName,
            email: email,
            phone: '9999999999', // Replace with actual phone from form if collected
            surl: 'http://localhost:3000/payment-success', // Redirect URL after successful payment (client-side)
            furl: 'http://localhost:3000/payment-failed', // Redirect URL after failed payment (client-side)
            udf1: '', udf2: '', udf3: '', udf4: '', udf5: '', // User Defined Fields (optional)
            udf6: '', udf7: '', udf8: '', udf9: '', udf10: '',
            hash: '', // Will be calculated below
            key: EASEBUZZ_API_KEY // Your Easebuzz API Key
        };

        // Generate hash
        easebuzzParams.hash = generateEasebuzzHash(easebuzzParams, EASEBUZZ_SALT);

        // Make a POST request to Easebuzz Initiate Payment API
        const easebuzzResponse = await axios.post(EASEBUZZ_INITIATE_PAYMENT_URL, easebuzzParams, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { status, access_key, error_message } = easebuzzResponse.data;

        if (status === 1 && access_key) {
            res.json({ status: 'success', access_key: access_key });
        } else {
            console.error('Easebuzz Initiate Payment Error:', error_message || easebuzzResponse.data);
            res.status(500).json({ status: 'error', message: error_message || 'Failed to get access key from Easebuzz.' });
        }

    } catch (error) {
        console.error('Backend API Error:', error.message);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
