import React, { Component } from 'react'

export default class MainHeader extends Component {
    render() {
        return (
            <header className="main-header">
                {/* Start Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav on no-full">
                    <div className="container">
                        {/* Start Header Navigation */}
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars" />
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="/thewayshop/images/logo.png" className="logo"  /></a>
                        </div>
                        {/* End Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                                <li className="dropdown megamenu-fw">
                                    <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">Product</a>
                                    <ul className="dropdown-menu megamenu-content animated fadeOutUp" role="menu" style={{ "display": "none", "opacity": "1" }}>
                                        <li>
                                            <div className="row">
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Top</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Jackets</a></li>
                                                            <li><a href="shop.html">Shirts</a></li>
                                                            <li><a href="shop.html">Sweaters &amp; Cardigans</a></li>
                                                            <li><a href="shop.html">T-shirts</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Bottom</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Swimwear</a></li>
                                                            <li><a href="shop.html">Skirts</a></li>
                                                            <li><a href="shop.html">Jeans</a></li>
                                                            <li><a href="shop.html">Trousers</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Clothing</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Top Wear</a></li>
                                                            <li><a href="shop.html">Party wear</a></li>
                                                            <li><a href="shop.html">Bottom Wear</a></li>
                                                            <li><a href="shop.html">Indian Wear</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Accessories</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Bags</a></li>
                                                            <li><a href="shop.html">Sunglasses</a></li>
                                                            <li><a href="shop.html">Fragrances</a></li>
                                                            <li><a href="shop.html">Wallets</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                            </div>
                                            {/* end row */}
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                                    <ul className="dropdown-menu animated fadeOutUp" style={{ "display": "none", "opacity": "1" }}>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="shop-detail.html">Shop Detail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="service.html">Our Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                        {/* Start Atribute Navigation */}
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search" /></a></li>
                                <li className="side-menu"><a href="#">
                                    <i className="fa fa-shopping-bag" />
                                    <span className="badge">3</span>
                                </a></li>
                            </ul>
                        </div>
                        {/* End Atribute Navigation */}
                    </div>
                    {/* Start Side Menu */}
                    <div className="side">
                        <a href="#" className="close-side"><i className="fa fa-times" /></a>
                        <li className="cart-box">
                            <ul className="cart-list">
                                <li>
                                    <a href="#" className="photo"><img src="/thewayshop/images/img-pro-01.jpg" className="cart-thumb"  /></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>1x - <span className="price">$80.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="/thewayshop/images/img-pro-02.jpg" className="cart-thumb"  /></a>
                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                    <p>1x - <span className="price">$60.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="/thewayshop/images/img-pro-03.jpg" className="cart-thumb"  /></a>
                                    <h6><a href="#">Agam facilisis</a></h6>
                                    <p>1x - <span className="price">$40.00</span></p>
                                </li>
                                <li className="total">
                                    <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                    <span className="float-right"><strong>Total</strong>: $180.00</span>
                                </li>
                            </ul>
                        </li>
                    </div>
                    {/* End Side Menu */}
                </nav>
                {/* End Navigation */}
            </header>
        )
    }
}
