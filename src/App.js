import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import WidgetLg from "./components/widgetLg/WidgetLg";
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import Chart from "./components/chart/Chart";
import AdminUser from "./components/adminUser/AdminUser";

function App() {
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const admin = currentUser?.isAdmin;
  const currentUserId = currentUser?._id;
  console.log(currentUserId);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {!admin && <Redirect to="/login" />}
        {admin && (
          <div className="dashboard">
            <Topbar />
            <div className="container">
              <div>
                <Sidebar />
              </div>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/transactions">
                <WidgetLg />
              </Route>
              <Route path="/reports">
                <div style={{ width: "100%" }}>
                  <FeaturedInfo />
                  <Chart />
                </div>
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/settings">
                <AdminUser userId={currentUserId} />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </div>
        )}
      </Switch>
    </Router>
  );
}

export default App;
