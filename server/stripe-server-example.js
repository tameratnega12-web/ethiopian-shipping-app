// Example Stripe server. This is NOT run by opening index.html.
// It must run on a backend such as Render, Railway, Firebase Functions, or your own server.

const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { amount, trackingNumber } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Shipping Payment ' + trackingNumber },
          unit_amount: Math.round(Number(amount) * 100),
        },
        quantity: 1,
      }],
      success_url: 'https://YOUR_DOMAIN.com/success.html?tracking=' + trackingNumber,
      cancel_url: 'https://YOUR_DOMAIN.com/cancel.html?tracking=' + trackingNumber,
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log('Stripe server running on port 4242'));
