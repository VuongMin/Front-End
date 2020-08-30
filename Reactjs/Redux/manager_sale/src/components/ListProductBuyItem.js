import React, { Component } from "react";
import * as MSG from '../contans/MSG'

export default class ListProductBuyItem extends Component {
  render() {
   let {cart} =this.props;
    return (
      <tr>
        <td>
          <img
            src={cart.images}
            style={{ maxWidth: "50px" }}
            alt=""
          />
        </td>
        <td>{cart.productName}</td>
        <td>{cart.price}</td>
        <td>
          <span>{cart.count}</span>
          <span onClick = {()=>this.onDescrease(cart.id)} className="btn btn-primary ml-2 mr-2">-</span>
            
          <span onClick = {()=>this.onIncrease(cart.id)} className="btn btn-primary mr-2">+</span>
        </td>
        <td> <button className="btn btn-warning mr-2">Edit</button>
           <button onClick = {()=>this.deleteItemCard(cart.id)} className="btn btn-danger mr-2">X</button>
        {cart.count * cart.price}</td>
      </tr>
    );
  }
  deleteItemCard = (id)=>{
    var {dp_deleteItemCard} = this.props;
    if(typeof dp_deleteItemCard ==="function"){
      dp_deleteItemCard(id);
    }
  }
  onIncrease = (id)=>{
    var {dp_increase,msg} = this.props;
     if(typeof dp_increase ==="function"){
      dp_increase (id);
      msg(MSG.INC_COUTN);
     }  
  }
  onDescrease = (id)=>{
     var {dp_descrease,msg} = this.props;
     if(typeof dp_descrease ==="function"){
       dp_descrease (id);
       msg(MSG.DECREASE);
     }   
  }
}
