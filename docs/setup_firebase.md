# Firebase Setup

1. Go to Firebase Console.
2. Create a new project.
3. Add a Web App.
4. Copy the Firebase config into `config/firebase.example.js` and rename it to `firebase.js`.
5. Enable Authentication:
   - Email/Password
6. Create Firestore Database.
7. Recommended collections:
   - users
   - travelers
   - shipments
   - payments
   - notifications

Next development step: replace localStorage functions with Firestore functions.
