import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ExploreMore from './Pages/ExploreMore/ExploreMore';
import AuthProvider from './Contexts/AuthProvider';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';
import Purchase from './Pages/PurchaseNow/Purchase';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';



function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>  
        <Route path="/home">
          <Home />
        </Route>
       
        <Route path="/exploreMore">
          <ExploreMore />
        </Route>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <PrivateRoute path="/purchase/:productID">
          <Purchase/>
        </PrivateRoute>
       
      </Switch>
    </Router>
    </AuthProvider>  
  );
}

export default App;
