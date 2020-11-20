import React, { Component } from 'react'

export default class Cartergory extends Component {
    render() {
        return (
            <div className="categories-shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="/thewayshop/images/t-shirts-img.jpg"  />
                                <a className="btn hvr-hover" href="#">T-shirts</a>
                            </div>
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="/thewayshop/images/shirt-img.jpg"  />
                                <a className="btn hvr-hover" href="#">Shirt</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="/thewayshop/images/wallet-img.jpg"  />
                                <a className="btn hvr-hover" href="#">Wallet</a>
                            </div>
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="/thewayshop/images/women-bag-img.jpg"  />
                                <a className="btn hvr-hover" href="#">Bags</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="/thewayshop/images/shoes-img.jpg"  />
                                <a className="btn hvr-hover" href="#">Shoes</a>
                            </div>
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="/thewayshop/images/women-shoes-img.jpg"  />
                                <a className="btn hvr-hover" href="#">Women Shoes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
