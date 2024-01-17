/**
 * 1.Visit: Console.firebase.google.com
 * 2.Create Project (Skip google analytic)
 * 3.Register App (Create config)
 * 4.install firebase: npm install firebase
 * 5.add config file to your project
 * 6.DANGER: Don't publish or make firebase config to public by pushing those to github
 * visit: Got to docs > Build > Authentication > Web > get started
 * export auth from the firebase.config.js file:export default app
 * Login/jsx: Import getAuth from firebase/auth
 * create const auth = getAuth(app)
 * import GoogleAuthProvider and create a new provider
 * use signInWithPopUp with auth and provider
 * activate sign in method (google,facebook etc..)
 */
