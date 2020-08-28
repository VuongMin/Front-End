import * as typeActions from '../contans/TypeActions'

export const getLoadView =() =>{
    return {
        type:typeActions.GET_DATA
    }
}
export const addToCart = (prodcut) =>{
 return {
     type:typeActions.ADD_TO_CART,
     prodcut
 }
}
export const messeage = (msg) =>{
    return {
        type:typeActions.LOAD_MSG,
        msg
    }
}
export const inCreaseCount = (id)=>{
     return{ type:typeActions.INC_COUTN,id}
}
export const descreaseCount = (id)=>{
    return {
        type:typeActions.DECREASE_COUNT,
        id
    }
}
export const deleteItemCard = (id) =>{
     return {
         type:typeActions.DELETE_ITEM_CART,
         id
     }
} 