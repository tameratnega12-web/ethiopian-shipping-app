# Stripe Setup

1. Create a Stripe account.
2. Get your publishable key and secret key.
3. Put the publishable key in `config/stripe.example.js`.
4. Put the secret key only on the server, never inside index.html.
5. Use `server/stripe-server-example.js` as the starting backend.

Important: real Stripe payments cannot be completed safely inside only an HTML file. A backend is required.
