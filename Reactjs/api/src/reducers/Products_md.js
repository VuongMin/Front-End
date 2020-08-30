import * as typeAction from '../contans/Actiontype'
var initProducts = [];

const myReducer = (state = initProducts,action)=>{
    switch (action.type) {
        case  typeAction.FETCH_ALL_PRODUCTS:{
         return action.products
        }
        case typeAction.DELETE_ITEM:{
         var idx = state.indexOf(action.id);
           return [...state.splice(idx,1)];    
        }
        default:
         return [...state]
        
    }
}
export default myReducer;