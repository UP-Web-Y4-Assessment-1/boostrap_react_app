import React from 'react'

function Sidebar({style , changeStyle}) {
    return (
        <ul className={style} id="accordionSidebar">
                        {/* <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                            <div className="sidebar-brand-icon rotate-n-15">
                                {/* <i className="fas fa-laugh-wink"></i> */}
                            </div>
                            <div className="sidebar-brand-text mx-3">GROUP2</div>
                        </a>
                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />
                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="dashboard">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>
                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />
                        <li className="nav-item">
                            <a className="nav-link" href="users">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Users</span></a>
                        </li>
                        {/* <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="order">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Order</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Login">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Sign in</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                    </ul>
    )
}

export default Sidebar