import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default class ListProducts extends Component {
    render() {
        return (
            <section className="pannel border border-primary rounded-sm">
            <h3 className=" mt-2 d-block p-2 bg-primary text-white">List All Products</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              <tbody>
               
                {this.props.children}
              </tbody>
            </table>
          </section>
        )
    }
}
