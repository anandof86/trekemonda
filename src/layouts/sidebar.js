
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useLocation
} from "react-router-dom";
import AgentComponent from '../components/agent'
import BagComponent from '../components/bags';
import PaymentComponent from '../components/payment';
import PurchaseComponent from '../components/purchase';
import ProductionComponent from '../components/production';
import PartyComponent from '../components/party';
import LoginComponent from '../components/login';
import SaleComponent from '../components/sale';
import BillComponent from '../components/bills';
import MarketerComponent from '../components/marketer';
import CollectionComponent from '../components/collection';
import ProtectedRoute from "../routes/protectedRoute";
import { BrowserRouter } from "react-router-dom";
const SideBarComponent = () => {


    const location = useLocation();
    const { pathname } = location;
    const authenticated = localStorage.getItem("isAuthenticated")
    console.log(authenticated)
    return (
        <div className="row flex-fill">
            {authenticated ?
            <div className="col-md-2 side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" style={{ backgroundColor: '#0d6efd' }} id="sidebar">
                <ul className="nav flex-column text-white w-100">
                    <li className="nav-item">
                        <Link className="nav-link" to="/agent"> <i class="bi bi-person"></i> Suppiler </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bags"> <i class="bi bi-bag"></i> Bags</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/purchase"> <i class="bi bi-cart4"></i> Purchase </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/payment"> <i class="bi bi-credit-card"></i> Payment </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collection"> <i class="bi bi-collection-fill"></i> Collection </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/production"> <i class="bi bi-truck"></i> Production </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/party"> <i class="bi bi-people-fill"></i> Party </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/marketer"> <i class="bi bi-shop"></i> Marketer </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sales"> <i class="bi bi-receipt"></i> Sales </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bills"> <i class="bi bi-envelope-paper"></i> Invoice </Link>
                    </li>

                </ul>
            </div> : ''}

            <div className="col-md-10">
                <div >
                        <Switch>
                            <Route exact path="/" component={LoginComponent} />
                            <ProtectedRoute exact path="/agent" component={AgentComponent} />
                            <ProtectedRoute exact path="/bags" component={BagComponent} />
                            <ProtectedRoute exact path="/payment" component={PaymentComponent} />
                            <ProtectedRoute exact path="/collection" component={CollectionComponent} />
                            <ProtectedRoute exact path="/purchase" component={PurchaseComponent} />
                            <ProtectedRoute exact path="/production" component={ProductionComponent} />
                            <ProtectedRoute exact path="/party" component={PartyComponent} />
                            <ProtectedRoute exact path="/marketer" component={MarketerComponent} />
                            <ProtectedRoute exact path="/sales" component={SaleComponent} />
                            <ProtectedRoute exact path="/bills" component={BillComponent} />
                        </Switch>
                </div>
            </div>
        </div>
        /*<aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div>
                <a href="index.html" className="brand-link">
                    <span className="brand-text font-weight-light">CNS Portal - Beta</span>
                </a>
            </div>
            <div className="sidebar" style={style}>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link className="nav-link" to="/agent"> <i className="nav-icon fas fa-users"></i> Suppiler Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bags"> <i className="nav-icon fas fa-shopping-bag"></i> Bag Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/purchase"> <i className="nav-icon fas fa-shopping-cart"></i> Purchase Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/payment"> <i className="nav-icon fas fa-money-check-alt"></i> Payment Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/collection"> <i className="nav-icon fas fa-money-check-alt"></i> Collection Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/production"> <i className="nav-icon fas fa-truck-moving"></i> Production Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/party"> <i className="nav-icon fas fa-user"></i> Party Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/marketer"> <i className="nav-icon fas fa-user"></i> Marketer Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sales"> <i className="nav-icon fas fa-solid fa-truck-pickup"></i> Sales Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bills"> <i className="nav-icon fas fa-file-invoice-dollar"></i> Invoice Manager</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>*/
    )
}

export default SideBarComponent;
