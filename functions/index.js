const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51HdXIDCUBM3otZpEfdBdKJxIGooPhZ07X4R1p1lCWpsYDlwX0gFo1GymyAimRwcJmolGqZumnkQw52iw9j60Tn7u00c48Y20qN')

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);