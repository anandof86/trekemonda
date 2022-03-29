import {
    Link, useLocation
} from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../state/index";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase"
const NavBarComponent = () => {
    const collection = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const { loginUser, logoutUser } = bindActionCreators(actions, dispatch);
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const location = useLocation();
    const { pathname } = location;
    const authenticated = localStorage.getItem("isAuthenticated")
    const currentuser = localStorage.getItem("user");
    const logout = async () => {
        await signOut(auth);
        loginUser(0)
        localStorage.setItem("isAuthenticated", "");
        localStorage.setItem("user", "");

        if (!collection.email) {
            window.location.pathname = "/";
        }
    };
    return (
        pathname === "/" ? '' :
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CNS Cements</a>
                    {authenticated ?
                        <span><button className="btn btn-light btn-sm" onClick={logout}>
                            {currentuser}  <i class="bi bi-box-arrow-right"></i>

                        </button> </span> : ''}
                </div>
            </nav>

    )
}

export default NavBarComponent;