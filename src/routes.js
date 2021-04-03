import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Placeholder from './pages/Placeholder';

const Routes = () => (
    <BrowserRouter>
        <Sidebar />
        <Switch>
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/chat" component={Placeholder} />
            <Route exact path="/folder" component={Placeholder} />
            <Route exact path="/message" component={Placeholder} />
            <Route exact path="/config" component={Placeholder} />
        </Switch>
    </BrowserRouter>
)

export default Routes;