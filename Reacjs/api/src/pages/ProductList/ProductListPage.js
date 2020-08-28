import React, { Component } from 'react'
import HanderButton from '../../components/HanderButton/HanderButton'
import ListProducts from '../../components/ListProducts/ListProducts'
import ProductItem from '../../components/ProductItem/ProductItem'
import {connect} from 'react-redux'
import * as action from '../../actions/index'
import CallApi from '../../utils/CallAPI'
class ProductListPage extends Component {
    constructor(props) {
        super(props);
   
    }
    componentDidMount() {
        this.props.ActFetchProductsRequest();
    }
    fnOndele = (id)=>{
        let {ActDeleteItemRequest}=this.props;
        ActDeleteItemRequest(id);
    }
    
    render() {
        var  {products} = this.props;
        return (
            
                <div className="container mt-2 mb-2">
                    <HanderButton></HanderButton>
                    <ListProducts>
                        {this.showProducts(products,this.fnOndele) }
                    </ListProducts>
                </div>
            
        )
    }
    showProducts = (products,fnOndele)=>{
        if(products.length >0){
            return products.map((item,idx)=>{
                return <ProductItem fnOndele={fnOndele} product = {item} key={idx}></ProductItem>
            })
        }
      
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ActFetchProductsRequest: () => {
            dispatch(action.ActFetchProductsRequest())
        },
        ActDeleteItemRequest:(id)=>{
            dispatch(action.ActDeleteItemRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)