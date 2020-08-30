import React, { Component } from 'react'
import{connect} from 'react-redux'
import PropTypes from 'prop-types';
import ListProductBuy from '../components/ListProductBuy'
import ListProductBuyItem from '../components/ListProductBuyItem'
import *  as aciton from '../actions/index'
class CartContainer extends Component {
    render() {
        var { dp_descrease ,listCart,dp_increase,dp_changeMsg,dp_deleteItemCard} = this.props;
        return (
              <ListProductBuy>
                  {this.mapListCart(listCart,dp_descrease,dp_increase,dp_changeMsg,dp_deleteItemCard)}
              </ListProductBuy>
        )
    }
    mapListCart =  (listcart,dp_func,dp_increase,dp_changeMsg,dp_deleteItemCard) =>{
        return listcart.map((cart,index)=>{
            return <ListProductBuyItem 
                    key={index} 
                    cart = {cart}
                    dp_descrease ={dp_func}
                    dp_increase = {dp_increase}
                     msg = {dp_changeMsg}
                     dp_deleteItemCard={dp_deleteItemCard}
                    >
                    </ListProductBuyItem>
        })
    }
}
CartContainer.propTypes  = {
    listCart:PropTypes.array
}
const mapStateToProps = (state, ownProps) => {
    return {
        listCart: state.cart
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dp_descrease: (id) => {
            dispatch(aciton.descreaseCount(id));
        },
        dp_increase:(id)=>{
            dispatch(aciton.inCreaseCount(id));
        },
        dp_changeMsg : (msg)=>{
           dispatch(aciton.messeage(msg));
        },
        dp_deleteItemCard : (id)=>{
            dispatch(aciton.deleteItemCard(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)