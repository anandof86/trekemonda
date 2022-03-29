import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBarComponent from '../../layouts/navbar';
import SideBarComponent from '../../layouts/sidebar';
import ContentComponent from '../../layouts/content';


import {
    BrowserRouter as Router,
} from "react-router-dom";
const CNSWebPortalApp = () => {
    return (
        <div className="fluid-container">
            <Router>
                <NavBarComponent />
                <SideBarComponent />
            </Router>
        </div>
    )
}

export default CNSWebPortalApp;