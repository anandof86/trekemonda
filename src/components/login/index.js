import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { bindActionCreators } from "redux";
import { actions } from "../../state/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../auth/firebase"

const LoginComponent = () => {
  const collection = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const {loginUser, logoutUser} = bindActionCreators(actions, dispatch);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    loginUser(currentUser)
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="wrapper">
      <div className="form">
  <h1>Welcome Back</h1>
  <p>Enter your credentials to continue.</p>
  
  <div className="input-wrapper">
    <input type="text" onChange={(event) => {
            setLoginEmail(event.target.value);
          }} placeholder="Enter your username" />
    <i className="bx bxs-user-circle"></i>
  </div>

  <div className="input-wrapper">
    <input type="password" onChange={(event) => {
            setLoginPassword(event.target.value);
          }} placeholder="Enter your password" />
    <i className="bx bx-key"></i>
  </div>
  
  <div>
    <button onClick={login}>
      Sign In
      <i className='bx bx-right-arrow-alt'></i>
    </button>
  </div>
</div>
      <div>
       

         <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  )
}

export default LoginComponent;