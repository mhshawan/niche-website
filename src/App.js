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
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import GiveReview from './Pages/Dashboard/GiveReview/GiveReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/exploreMore">
            <ExploreMore />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/myOrders">
            <MyOrder />
          </Route>
          <Route path="/reviews">
            <GiveReview />
          </Route>
          <Route path="/makeAdmin">
          <MakeAdmin/>
        </Route>
        <Route path="/manageAllOrders">
          <ManageAllOrders/>
        </Route>
        <Route path="/manageProduct">
          <ManageProduct/>
        </Route>
        <Route path="/addProduct">
          <AddProduct/>
        </Route>
          <PrivateRoute path="/purchase/:productID">
            <Purchase />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
