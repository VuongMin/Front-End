import * as typeActions from '../contans/TypeActions'
 var initMSG ="Giỏ hàng của bạn rỗng !";
  const myReducer = (state = initMSG ,action)=>{
      switch (action.type) {
          case typeActions.LOAD_MSG:{
             return action.msg;
          }
          default:
              return state;
      }
  }
  export default myReducer ;