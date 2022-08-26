
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/orders" element={
              <RequireAuth>
                <Orders></Orders>
              </RequireAuth>
            } />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>}/>
            <Route path="*" element={<NotFound></NotFound>}/>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
