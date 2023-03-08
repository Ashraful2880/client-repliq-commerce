import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Navbar/Header";
import Footer from "./Components/Shared/Footer/Footer";
import ErrorPage from "./Components/Shared/ErrorPage/ErrorPage";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import ScrollToPageTop from "./Components/Shared/ScrollToPageTop/ScrollToPageTop";
import Home from "./Components/Pages/Home/Home";
import SignUp from "./Components/Pages/Signup/SignUp";
import Login from "./Components/Pages/Login/Login";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Shop from "./Components/Pages/Shop/Shop";
import ProductDetails from "./Components/Pages/CartOverview/ProductDetails/ProductDetails";
import SuccessPage from "./Components/Pages/CartOverview/SuccessPage/SuccessPage";
import CartOverview from "./Components/Pages/CartOverview/CartOverview/CartOverview";
import WishList from "./Components/Pages/CartOverview/Wishlist/WishList";
import CheckOut from "./Components/Pages/CartOverview/CartOverview/CheckOut";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Components/Pages/Dashboard/DashboardHome/DashboardHome";
import AllProducts from "./Components/Pages/Dashboard/AllProducts/AllProducts";
import AddProduct from "./Components/Pages/Dashboard/AddProduct/AddProduct";
import AddCustomer from "./Components/Pages/Dashboard/AddCustomer/AddCustomer";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin/MakeAdmin";
import Summary from "./Components/Pages/Dashboard/Summary/Summary";
import Overview from "./Components/Pages/Dashboard/Overview/Overview";
import OrderList from "./Components/Pages/Dashboard/OrderList/OrderList";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders/ManageOrders";
import CustomerList from "./Components/Pages/Dashboard/CustomerList/CustomerList";
import Users from "./Components/Pages/Dashboard/Users/Users";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <div className="lg:block md:block hidden">
        <ScrollToTop smooth className="scroll-button" color="white" />
      </div>
      <BrowserRouter>
        <ScrollToPageTop />
        <Header />
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="shopCategory/:category" element={<Shop />} />
          <Route path="addToCart/:productId" element={<ProductDetails />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cart" element={<CartOverview />} />
          <Route path="/wishList" element={<WishList />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="" element={<DashboardHome />} />
            <Route path="allProducts" element={<AllProducts />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="customerList" element={<CustomerList />} />
            <Route path="addCustomer" element={<AddCustomer />} />
            <Route path="users" element={<Users />} />
            <Route path="overview" element={<Overview />} />
            <Route path="summary" element={<Summary />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
