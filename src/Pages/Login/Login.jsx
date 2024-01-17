import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const [github, setGithub] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setUser(newUser);
      })
      .catch((error) => {
        console.log("error khaisi", error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        setGithub(null);
        console.log(result);
      })
      .catch((error) => {
        console.log("errorrrr", error.message);
      });
  };

  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const githubUser = result.user;
        console.log(githubUser);
        setGithub(githubUser);
      })
      .catch((error) => {
        console.log("error Khaisi", error.message);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut} className="p-3 m-6 bg-red-400">
          Sign Out
        </button>
      ) : (
        <div>
          <button onClick={handleGoogleLogin} className="p-3 m-6 bg-red-400">
            Google Login
          </button>
          <br />
          <br />
          <br />
          <button onClick={handleGithubLogin} className="p-3 m-6 bg-red-400">
            Github Login
          </button>
        </div>
      )}

      {user && (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
      <br />
      <br />
      {github && (
        <div>
          <p>Name: {github.displayName}</p>
          <p>Uid: {github.uid}</p>
          <img src={github.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
