import React, { Component } from "react";

export default class HeadTop extends Component {
  render() {
    return (
      <div className="main-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-slid-box">
                <div id="offer-box" className="carouselTicker">
                  <ul
                    className="offer-box"
                
                  >
                    <li style={{ opacity: "0.895078" }}>
                      <i className="fab fa-opencart" /> 50% - 80% off on Fashion
                    </li>
                    <li style={{ display: "none" }}>
                      <i className="fab fa-opencart" /> 20% off Entire Purchase
                      Promo code: offT20
                    </li>
                    <li style={{ display: "none" }}>
                      <i className="fab fa-opencart" /> Off 50%! Shop Now
                    </li>
                    <li style={{ display: "none" }}>
                      <i className="fab fa-opencart" /> Off 10%! Shop Now Man
                    </li>
                    <li style={{ display: "none" }}>
                      <i className="fab fa-opencart" /> 50% - 80% off on Fashion
                    </li>
                    <li style={{ display: "none" }}>
                      <i className="fab fa-opencart" /> 20% off Entire Purchase
                      Promo code: offT20
                    </li>
                    <li style={{ display: "none" }}>
                      <i className="fab fa-opencart" /> Off 50%! Shop Now
                    </li>
                    <li style={{ display: "none" }}>
                      <i className="fab fa-opencart" /> Off 10%! Shop Now Man
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="custom-select-box">
                <div className="btn-group bootstrap-select show-tick form-control">
                  <button
                    type="button"
                    className="btn dropdown-toggle btn-default btn-light"
                    data-toggle="dropdown"
                    role="button"
                    data-id="basic"
                    title="¥ JPY"
                  >
                    <span className="filter-option pull-left">¥ JPY</span>&nbsp;
                    <span className="bs-caret">
                      <span className="caret" />
                    </span>
                  </button>
                  <div className="dropdown-menu open" role="combobox">
                    <div
                      className="dropdown-menu inner"
                      role="listbox"
                      aria-expanded="false"
                    >
                      <a
                        tabIndex={0}
                        className="dropdown-item selected"
                        data-original-index={0}
                      >
                        <span
                          className="dropdown-item-inner "
                          data-tokens="null"
                          role="option"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-selected="true"
                        >
                          <span className="text">¥ JPY</span>
                          <span className="fa fa-check check-mark" />
                        </span>
                      </a>
                      <a
                        tabIndex={0}
                        className="dropdown-item"
                        data-original-index={1}
                      >
                        <span
                          className="dropdown-item-inner "
                          data-tokens="null"
                          role="option"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">$ USD</span>
                          <span className="fa fa-check check-mark" />
                        </span>
                      </a>
                      <a
                        tabIndex={0}
                        className="dropdown-item"
                        data-original-index={2}
                      >
                        <span
                          className="dropdown-item-inner "
                          data-tokens="null"
                          role="option"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">€ EUR</span>
                          <span className="fa fa-check check-mark" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <select
                    id="basic"
                    className="selectpicker show-tick form-control"
                    data-placeholder="$ USD"
                    tabIndex={-98}
                  >
                    <option>¥ JPY</option>
                    <option>$ USD</option>
                    <option>€ EUR</option>
                  </select>
                </div>
              </div>
              <div className="right-phone-box">
                <p>
                  Call US :- <a href="#"> +11 900 800 100</a>
                </p>
              </div>
              <div className="our-link">
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Our location</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
