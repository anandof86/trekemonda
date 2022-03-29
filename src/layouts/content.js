import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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

const ContentComponent = () => {

    return (
        <div >
            <Switch>
                <Route exact path="/">
                    <LoginComponent title={'LOGIN MANAGER'} />
                </Route>
                <Route exact path="/agent">
                    <AgentComponent title={'AGENT MANAGER'} />
                </Route>
                <Route path="/bags">
                    <BagComponent title={'BAGS MANAGER'} />
                </Route>
                <Route path="/payment">
                    <PaymentComponent title={'Payment Manager'} />
                </Route>
                <Route path="/collection">
                    <CollectionComponent title={'Collection Manager'} />
                </Route>
                <Route path="/purchase">
                    <PurchaseComponent title={'Payment/Collection Manager'} />
                </Route>
                <Route path="/production">
                    <ProductionComponent title={'Payment/Collection Manager'} />
                </Route>
                <Route path="/party">
                    <PartyComponent title={'Party Manager'} />
                </Route>
                <Route path="/marketer">
                    <MarketerComponent title={'Marketer Manager'} />
                </Route>
                <Route path="/sales">
                    <SaleComponent title={'Sales Manager'} />
                </Route>
                <Route path="/bills">
                    <BillComponent title={'Invoice Manager'} />
                </Route>
            </Switch>
        </div>
    )

}

export default ContentComponent;
