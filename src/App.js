import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManageProducts from './Component/Dashboard/ManageProduct';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Product from './Component/Product/Product';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import AddProduct from './Component/Dashboard/AddProduct';
import ProductDetails from './Component/Product/ProductDetails';
import Orders from './Component/Dashboard/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Component/Dashboard/Payment';
import Reviews from './Component/Review/Reviews';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import AllUsers from './Component/Dashboard/AllUsers';
import AddReview from './Component/Review/AddReview';
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';
import Profile from './Component/Dashboard/Profile';
import AllOrders from './Component/Dashboard/AllOrders';
import Blog from './Component/Blog/Blog';
import useUser from './Component/Hook/useUser';
// Apps js
function App() {

  const [currentUser] = useUser()
  const show = true
  return (
    <div className="App">
      <Navbar />
      <div className="p-5 lg:p-0">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/review' element={<Reviews />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<RequireAuth>
            <ProductDetails />
          </RequireAuth>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route index element={currentUser?.role === "admin" ? <AllOrders /> : <Orders />} />
            <Route path='orders' element={currentUser?.role === "admin" ? <AllOrders /> : <Orders />} />
            <Route path='profile' element={<Profile />} />
            <Route path='payment' element={<Payment />} />
            <Route path='review' element={<AddReview show={show} />} />
            {
              currentUser?.role === "admin" &&
              <>
                <Route path='products-add' element={<AddProduct />} />
                <Route path='products-manage' element={<ManageProducts />} />
                <Route path='all-users' element={<AllUsers />} />
              </>
            }
          </Route>
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
