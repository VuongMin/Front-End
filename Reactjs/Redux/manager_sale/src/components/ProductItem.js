import React, { Component } from "react";
import * as MSG from '../contans/MSG'
export default class ProductItem extends Component {
  render() {
    var  {product}=this.props;
    return (
      <div className="col-sm-3 text-sm-center  border border-secondary rounded pt-2 pb-2">
        <div className="product-item text-secondary">
          <img
            style={{ width: "100%", maxWidth: "200px" }}
            src={product.images}
            alt=""
          />
          <h3 className="product-name">{product.productName}</h3>
          <div className="rating">
            { 
              this.showRating(product.rating)
            }
          </div>
          <div className="product-description">
           {product.description}
          </div>
          <div
            className="sale d-flex"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="product-price">{product.price}</div>
            <i onClick={()=>this.fnAddToCard(product)} className ="fa fa-money btn btn-primary" ></i>
          </div>
        </div>
      </div>
    );
  }
  fnAddToCard =(product)=>{
    console.log(this.props);
     let {tocard,msg} = this.props;
     if(typeof tocard ==="function" && typeof msg ==="function"){
       tocard(product);
       msg(MSG.BUY_SUCCESS);
     }
  }
  showRating = function (value) {
      var reusult = [];
    for (let index = 0; index < value; index++) {
       reusult.push( <i key={index} className="fa fa-star" aria-hidden="true"></i>);
    }
    return reusult;
  }
}
