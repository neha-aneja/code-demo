import React from 'react';
import { NavLink } from 'react-router-dom';
import {UserOutlined, LogoutOutlined} from '@ant-design/icons';
import {Menu,Dropdown} from 'antd';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const menu =
        (<Menu>
            <Menu.Item key="0"><Link to='/' className="inline-block"><LogoutOutlined style={{ color: '#08c' }} /><span className="ml-1">Logout</span></Link></Menu.Item>
        </Menu>);

  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Engineering Stuff</NavLink>
                {/* <div className="logo-container" style={{margin: "5px 0 5px 0"}}>
                <img src="Images/Capture.PNG"/>
                </div> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-70 mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-corrent="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/documentation">Documentation</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                  </ul>
                  <Dropdown overlay={menu} trigger={['click']} onClick={e => e.preventDefault()}>
                    <a href="/" className="ant-dropdown-link anchor-color fw-500" onClick={e => e.preventDefault()}>
                    <UserOutlined />
                </a>
            </Dropdown>
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;