import * as typeAction from '../contans/Actiontype'
import callAIP from '../utils/CallAPI'
//Func get API from data
export const ActFetchProductsRequest = ()=>{
    return (dispatch)=>{
         return callAIP("GET","products","json",null).then(res=>{
              dispatch(getListProducs(res.data))
        });
    }
}
export const ActDeleteItemRequest =(id)=>{
       return (dispatch)=>{
         callAIP("DELETE",`products/${id}`,"json",null).then(res=>{
            dispatch(deleleItem(id));
        })
       }
}
//Func for reducers
export const getListProducs = (products)=>{
    return {
        type:typeAction.FETCH_ALL_PRODUCTS,
        products
    }
}
export const deleleItem = (id)=>{
    return {
        type:typeAction.DELETE_ITEM,
        id
    }
}