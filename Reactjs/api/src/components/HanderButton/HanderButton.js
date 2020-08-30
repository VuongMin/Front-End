import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HanderButton extends Component {
    render() {
        return (
            <div>
                <Link to="/products/add" className="btn btn-primary mb-2">Add New Product</Link>
            </div>
        )
    }
}
