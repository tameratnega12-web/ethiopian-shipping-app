# ET Ethiopian Shipping Business Inc. - V6.0 Notifications Added

GitHub-ready prototype for a community shipping app between Atlanta and Ethiopia.

## Included features

- Sender account and dashboard
- Traveler account and dashboard
- Traveler commission calculation: `$2 x accepted lbs`
- Sender shipment requests
- Traveler accept/decline workflow
- Admin dashboard
- Tracking status updates
- Demo payment marking
- Printable receipts
- English / Amharic language toggle
- Data backup export/import
- Demo data generator
- GitHub Pages deployment workflow
- Firebase and Stripe setup placeholders
- Sender and traveler notifications/activity history
- Unread notification count and mark-all-read button

## Demo logins

Admin:
- Email: `admin@etshipping.com`
- Password: `admin123`

Use **Create Demo Data** inside the app for sample sender/traveler accounts.

## Important

This is still a prototype. Do not use it for real customer payments until Firebase Authentication, Firestore security rules, Stripe Checkout, and legal policies are completed.


## V5.8 fixes
- Restored/confirmed Sender Pay Now button.
- Restored/confirmed Traveler Accept / Decline buttons for pending requests.
- Traveler dashboard shows only traveler commission and airline charge.
- Admin dashboard shows sender payments, traveler commission, airline charges, and app revenue only.
- Price rule updated to $9 per lb.


## V6.0 fixes
- Added Sender Notifications panel.
- Added Traveler Notifications panel.
- Sender gets activity updates for request sent, traveler accepted/declined, payment, and delivery status.
- Traveler gets activity updates for new requests, accepted/declined requests, payment, status updates, and commission earned.
- Notifications are included in backup export/import.
