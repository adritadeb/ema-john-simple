/*
   * 1. create a new firebase project in console.firebase.google.com
   * 2. npm install firebase
   * 3.create firebase.init.js and import getAuth place it on auth variable to export auth;
   * 4. Firebase settings > Authentics > email and password auth
   * 5. Create Login, Signup component, setup route
   * 6. attach form input handler and form submit handler
   * 7. npm install --save react-firebase-hooks
   * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks/auth
   * 9. if user is created redirect to the expected page
   * 10. useSignInWithAndPassword from react-firebase-hooks/auth for sign in
   * 11. Create RequireAuth component ==> check user exists also track user location
   * 12. In route wrap protected component by using RequireAuth component
*/


/*
   * Firebase hosting steps
   * 1. npm install -g firebase-tools
   * 2. firebase login
   * 3. firebase init
   * 4. firebase deploy
*/