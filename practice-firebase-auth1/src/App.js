import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider()
  const [user, setUser] = useState({});
  const handlerSigningWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user)
    })
    .catch(error => {
      console.error(error);
    })
  };
  const signingOut = () => {
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(() => {
      setUser({})
    })
  };
  const handlerSignInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
    })
    .catch(error => {
      console.error(error);
    })
  }
  const handlerSignInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
  }
  return (  
    <div className="App">
      {
        user.uid ? 
        <button onClick={signingOut}>Sign Out</button> :
        <>
          <button onClick={handlerSigningWithGoogle}>Sign in with Google</button>
          <button onClick={handlerSignInWithGithub}>Sign in with Github</button>
          <button onClick={handlerSignInWithFacebook}>Sign in with Facebook</button>
        </>
      }

      {user.uid && <div style={{marginTop: '50px'}}>
        <img src={user.photoURL} alt="" />
        <h1>{user.displayName}</h1>
        <p>
          <small>Email: {user.email}</small>
        </p>
      </div>}
    </div>
  );
}

export default App;
