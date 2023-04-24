import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import './login.css'

const Login = ()=>{
  const provider = new GoogleAuthProvider();
const auth = getAuth();

const handleSubmit =()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
  });
}

// import { getAuth, signOut } from "firebase/auth";
const handleSingOut = ()=>{
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.log(error);
  // An error happened.
});

}

  return(
    <div className="login-container">
       <button className="login-btn" 
       onClick={handleSubmit}
       ><i class="fa-brands fa-google"></i> Sign In with Google</button>
       <button className="logout-btn"
       onClick={handleSingOut}
       >Sign Out</button>
    </div>
  )
}

export default Login;