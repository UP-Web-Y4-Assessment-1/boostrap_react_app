import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Logout from './components/Logout';
import { useState } from 'react';
import Order from './components/Order';
import User from './components/User';

function App() {
  const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

  const changeStyle = () => {
    if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
    }
    else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    }
  };
  const changeStyle1 = () => {
    if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1")
    }
    else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    }
  };
  return (
    <BrowserRouter>
      <div>
        <body id="page-top">
          <div id="wrapper">
            <Sidebar style={style} changeStyle={changeStyle} />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar changeStyle1={changeStyle1} />
                <Routes>
                  <Route path="/" element={<Content />} />
                  <Route path="login" element={<Login />} />
                  <Route path="order" element={<Order />} />
                  <Route path="users" element={<User />} />
                  <Route path="dashboard" element={<Content />} />
                </Routes>

              </div>
              <Footer />              
            </div>
            

          </div>

          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>

          <Logout />
        </body>
      </div>


    </BrowserRouter>
  );
}

export default App;
