import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //* google sign in
  const handleSignInGoogle = () => {
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

  const handleSignOut = () => {
    signOut(auth)
    .then(() =>{
      setUser({})
    })
    .catch(() => {
      setUser({})
    })
  };
  //* github sign in
  const handlerGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div className="App">

      {/* Conditional rendering  */}
      {/* Button Toggle */}
      {user.uid ? 
      <button onClick={handleSignOut}>Sign Out</button> :
      <>
        <button onClick={handleSignInGoogle}>Sign in with Google</button>
        <button onClick={handlerGithubSignIn}>Sing in with Github</button>
      </>
      }

      {user.uid && <div style={{marginTop: '50px'}}>
        <img src={user.photoURL} alt="" />
        <h2>User Name: {user.displayName}</h2>
        <h4>Email Address: {user.email}</h4>
      </div>}
    </div>
  );
}

export default App;
