import { Collapse } from "bootstrap";
import { Redirect, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import LoginComponent from "../components/login";

const ProtectedRoute = ({ component: Component }, ...restOfProps ) => {
    const collection = useSelector((state) => state.auth);
    const authenticated = localStorage.getItem("isAuthenticated");
    console.log(collection.email)
    return(
        <Route
        {...restOfProps}
        render={(props) =>
            authenticated ? <Component /> : <Redirect to="/" />
        }
      />
    )
}

export default ProtectedRoute;