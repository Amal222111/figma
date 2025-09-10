import { Route, Routes } from 'react-router'
import "./index.css"
import About from './pages/AboutPage/ui/About'
import Home from './pages/HomePage/ui/Home'
import Layout from './app/layouts/MainLayout'
import Basket from './pages/BasketPage/ui/Basket'
import Contact from './pages/ContactPage/ui/Contact'
import ListOfProducts from './pages/ListOfProductsPage/ui/ListOfProducts'
import Login from './pages/LoginPage/ui/Login'
import PaymentPage from './pages/PaymenPage/ui/Payment'
import Product from './pages/ProductPage/ui/Product'
import Profile from './pages/ProfilePage/ui/Profile'
import Registration from './pages/RegistrationPage/ui/Registration'
import Wishlist from './pages/WishlistPage/ui/Wishlist'
import Blog from './pages/BlogPages/ui/BlogPages'
import Footer from './widgets/Footer/ui/Footer'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='basket' element={<Basket />} />
          <Route path='contact' element={<Contact />} />
          <Route path='listOfProduct' element={<ListOfProducts />} />
          <Route path='login' element={<Login />} />
          <Route path='paymentPage' element={<PaymentPage />} />
          <Route path='product' element={<Product />} />
          <Route path='profile' element={<Profile />} />
          <Route path='registration' element={<Registration />} />
          <Route path='wishlist' element={<Wishlist />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='footer' element={<Footer />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
