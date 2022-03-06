import React from 'react';
import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const New = () => {

    const menu = [
        {
            title: "abc",
            url: "/new/abc"
        },
        {
            title: "xyz",
            url: "/new/xyz"
        },
        {
            title: "pqr",
            url: "/new/pqr"
        }
    ]

    return (
        <div className="new-panel">
            <div className="header">
                <h1>Text</h1>
            </div>
            <div className="nav">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
            <div>
                <div className="sidebar">
                    <Menu>
                        {
                            menu.map((el) => {
                                return (
                                    <MenuItem key={el.url}> {el.title} </MenuItem>
                                );
                            })
                        }
                    </Menu>
                </div>
                <div className="content"></div>
                <div className="ad">
                    {/* <div class="card bg-dark text-white" >
                        <img src="..." class="card-img" alt="..."/>
                            <div class="card-img-overlay" style={{height:"30px"}}>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="footer"></div>
            </div>
    )
}

export default New;