import React, { Component } from "react";
import ListProductBuyItem from "./ListProductBuyItem";

export default class ListProductBuy extends Component {
  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>AMUONT</th>
            <th>TOTAL</th>
          </tr>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}
