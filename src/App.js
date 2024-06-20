import "./App.css";
// Import Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
// Import pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
// Import components
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  // Pour vérifier si l'utilisateur est connecté ou non
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      {/* {Pour que le header s'affiche sur toutes les pages} */}
      <Header handleToken={handleToken} userToken={userToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
