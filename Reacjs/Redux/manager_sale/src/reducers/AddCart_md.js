import * as typeActions from '../contans/TypeActions'
var initCard =[];
const myReducer = (state = initCard ,action)=>{
  switch (action.type) {
      case typeActions.ADD_TO_CART :{
        let cartItem = {...action.prodcut,count:1}
        if(checkExistCart(state,cartItem.id)){
             let idx =  state.findIndex(item =>{
               return item.id ===cartItem.id;
             })
             state[idx].count +=1;
            return [...state]
        }
        state.push(cartItem);
        return  [...state];
      }
      case typeActions.DECREASE_COUNT :{
        let idx =  state.findIndex(item =>{
          return item.id ===action.id;
        });
        if(state[idx].count >0){
          state[idx].count -=1;
        }
        return [...state]
      }
      case typeActions.INC_COUTN :{
        let idx =  state.findIndex(item =>{
          return item.id ===action.id;
        });
        if(state[idx].count >0){
          state[idx].count +=1;
        }
        return [...state]
      }
      case typeActions.DELETE_ITEM_CART:{
        let idx =  state.findIndex(item =>{
          return item.id ===action.id;
        });
         state.splice(idx,1);
         return [...state];
      }
      default:
          return [...state];
  }
}
const checkExistCart = function(state,cartId){
   let status =false;  
  state.forEach(element => {
         if(element.id === cartId){
           status =true;
         }
      });
    return status===true ?true:false;
}
export default myReducer;