import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { logDOM } from "@testing-library/react";

export default class Products extends Component {
  render() {
    return (
      <div className="box-product">
        <div className="row">
           
              {
                this.props.children
              }
        
        </div>
      </div>
    );
  }
}
