import MenuItem from 'antd/lib/menu/MenuItem';
import React from 'react';
import {Menu} from 'antd';

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
                                <MenuItem> {el.title} </MenuItem>
                            );
                        })
                    }
                </Menu>
            </div>
            <div className="content"></div>
            <div className="ad"></div>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default New;