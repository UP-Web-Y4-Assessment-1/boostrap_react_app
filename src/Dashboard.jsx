import React, { useState } from 'react';
import './Dashboard.css';
import LineChat from './components/LineChat';
import PieChart from './components/PieChart';
import NavAlerts from './components/NavAlerts';
import NavMessages from './components/NavMessages';
import NavPagesCollapseMenu from './components/NavPagesCollapseMenu';
import Logout from './components/Logout';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';

function Dashboard() {
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
        <div>
            <body id="page-top">
                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">
                    {/* <!-- Sidebar --> */}
                    <Sidebar style={style} changeStyle={changeStyle}/>
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <Navbar changeStyle1={changeStyle1}/>
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <Content/>
                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/* <!-- End of Main Content --> */}
                        {/* <!-- Footer --> */}
                        <Footer/>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/* <!-- Logout Modal--> */}
                <Logout/>
            </body>
        </div>
    )
}

export default Dashboard;