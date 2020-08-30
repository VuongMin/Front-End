import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    fnDelete = (id)=>{
     if(window.confirm("Are your really want to delet this item ?")){
         var {fnOndele} = this.props;
         if(typeof fnOndele ==="function"){
             fnOndele(id);
         }
     }
    }
    render() {
        var {product} =this.props;
        
        return (
            <tr>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.status?"stocking":"Out of stock"}</td>
                  <td> <Link to={`products/edit/${product.id}`} className="btn btn-warning mr-2">Edit</Link>
                      <span onClick={()=>this.fnDelete(product.id)} className="btn btn-danger">X</span></td>
                </tr>
               
        )
    }
}
