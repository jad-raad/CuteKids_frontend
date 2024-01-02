import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import ProductInfo from './pages/ProductInfo'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthContextProvider from './helpers/AuthContext'

function App() {

  return (
    <>
      <AuthContextProvider>
        <div className='min-h-[100vh] flex flex-col justify-between'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductInfo />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        </div>
      </AuthContextProvider>
    </>
  )
}

export default App