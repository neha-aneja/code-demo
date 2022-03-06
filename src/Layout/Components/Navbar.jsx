import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
//import Topics from '../../Pages/Topics';

const Navbar = () => {

  const { SubMenu } = Menu;
  const [current, setCurrent] = useState();

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  const menu =
    (<Menu>
      <Menu.Item key="0"><Link to='/login' className="inline-block custom_block"><LogoutOutlined trigger={['click']} onClick={e => e.preventDefault()} style={{ color: '#08c' }} /><span className="ml-1">Logout</span></Link></Menu.Item>
    </Menu>);

  const menu1 =
  (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
                        {/* <SubMenu key="SubMenu" title="Topics"> */}
                          <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1"><NavLink className="nav-link" to="/menu1">Option 1</NavLink></Menu.Item>
                            <Menu.Item key="setting:2"><NavLink className="nav-link" to="/menu2">Option 2</NavLink></Menu.Item>
                          </Menu.ItemGroup>
                          <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3"><NavLink className="nav-link" to="/menu3">Option 3</NavLink></Menu.Item>
                            <Menu.Item key="setting:4"><NavLink className="nav-link" to="/menu4">Option 4</NavLink></Menu.Item>
                          </Menu.ItemGroup>
                        {/* </SubMenu> */}
                      </Menu>
  )

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <div className="row d-flex custom_row"> */}
          <NavLink className="navbar-brand" to="/">Engineering Stuff</NavLink>
          {/* <div className="logo-container" style={{margin: "5px 0 5px 0"}}>
                <img src="Images/Capture.PNG"/>
                </div> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mr mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-corrent="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/new">New</NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/topics">Topics</NavLink> */}
                <Dropdown className="user_menu" overlay={menu1} trigger={['click']} onClick={e => e.preventDefault()}>
                  {/* <a href="/" className="ant-dropdown-link anchor-color fw-500" onClick={e => e.preventDefault()}> */}
                  <NavLink className="nav-link" to="/topics">Topics</NavLink>
                  {/* </a> */}
                </Dropdown>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/documentation">Documentation</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              {/* <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li> */}
              <li className="nav-item">
                <Dropdown className="user_menu" overlay={menu} trigger={['click']} onClick={e => e.preventDefault()}>
                  {/* <a href="/" className="ant-dropdown-link anchor-color fw-500" onClick={e => e.preventDefault()}> */}
                    <UserOutlined />
                  {/* </a> */}
                </Dropdown>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>

    </>
  )
}
export default Navbar;