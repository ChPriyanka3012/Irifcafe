import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
import { AppContextProvider } from "./context/appContext.js";
import Logout from "./components/user/Logout.js";
import Footer from "./components/footer/Footer.js"

export const UserContext = createContext(null);
function App() {
  const [user, setuser] = useState(0);
  const val = { user, setuser };
  return (
    <div className="App">
      <UserContext.Provider value={val}>
        {!user ? (
          <Login />
        ) : (
          <AppContextProvider>
            <Router>
              <Navbar />
              <hr></hr>
              <Routes>
                <Route path="/" index element={<Products />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Footer/>
            </Router>
          </AppContextProvider>
        )}
      </UserContext.Provider>
    </div>
  );
}
export default App;
