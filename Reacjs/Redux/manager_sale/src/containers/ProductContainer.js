import React, { Component } from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products'
import * as action from '../actions/index'
import ProductItem from '../components/ProductItem';
import PropTypes from "prop-types";
 class ProductContainer extends Component {
    render() {
        
         var {data,addToCard,LoadMSG}=this.props;
        return (
            <div>
                 <Products>
                     {mapProducts(data,addToCard,LoadMSG)}
                 </Products> 
            </div>
        )
    }
}
//use map for child va use prof child of reactjs
const mapProducts = (listProduct,dp_ToCart,msg) =>{
     return  listProduct.map((product,index)=>{
          return <ProductItem
            key={index}
            product = {product}
            tocard = {dp_ToCart}
             msg = {msg}
            ></ProductItem>
      });
}
ProductContainer.propTypes  = {
    data:PropTypes.array,
    addToCard:PropTypes.func
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCard :(product)=>{
           dispatch(action.addToCart(product))
        },
        LoadMSG : (msg) => {
            dispatch(action.messeage(msg));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)