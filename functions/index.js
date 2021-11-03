const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
/* eslint max-len: ["error", { "code": 180 }]*/
const stripe=require("stripe")("sk_test_51I8pGWCJxtMeKXlIJU9oiZP9NaU9NQNHL0hNrMMlc02qfLpgd2SPYFXb44a8ZHshQMOmmo9v7tfSUcgTUkJ2L3cI00NPxkcJMn");

// API


// APP config
const app=express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response)=> response.status(200).send("hello world"));

app.post("/payments/create", async (request, response)=>{
  const total=request.query.total;
  console.log("Payment request received, AMOUNT:", total);
  const paymentIntent= await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  // OK Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api=functions.https.onRequest(app);
