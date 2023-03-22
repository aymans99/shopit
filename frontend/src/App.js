import "./App.css";
import { useEffect } from "react";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./product/ProductDetails";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { loadUser } from "./actions/userActions";
import store from "./store";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./route/ProtectedRoute";
import UpdateProfile from "./components/user/updateProfile";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/me"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
