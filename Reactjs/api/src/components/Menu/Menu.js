import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Menu extends Component {
 MenuLink = (Menus) => {
        if (Menus.length > 0) {
            return Menus.map((item, idx) => {
                return (
                    <li  key={idx} className="nav-item ">
                        <Link exact={item.exact.toString()} to={item.to}>{item.label}</Link>
                    </li>

                )
            })
        }

    }
    render() {
        const Menus = [
            {
                label: "Home",
                to: "/",
                exact: true
            },
            {
                label: "List Products",
                to: "/Products",
                exact: true
            }
        ];
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Call API</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.MenuLink(Menus)}
                    </ul>
                </div>
            </nav>
        )
    }
}
