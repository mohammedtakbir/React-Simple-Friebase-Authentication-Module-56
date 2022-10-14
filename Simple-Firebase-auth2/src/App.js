import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //* Google sign in
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  };

  //* Github sign in
  const handleSignInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  };
  return (
    <div className="App">
      {user.uid ?
        <button onClick={handleSignOut}>Sign Out</button> :
        <>
          <button onClick={handleSignInWithGoogle}>Sign in with google</button>
          <button onClick={handleSignInWithGithub}>Sign in with Github</button>
        </>
      }
      {
        user.uid && <div style={{ marginTop: '50px' }}>
          <img src={user.photoURL} alt="" />
          <h1>User Name: {user.displayName}</h1>
          <p>Email: {user.email}</p>
        </div>
      }
    </div>
  );
}

export default App;
