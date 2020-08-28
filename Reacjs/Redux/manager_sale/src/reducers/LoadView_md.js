import * as typeActions from '../contans/TypeActions'
// var  initData = [
//     {
//         id:0,
//         productName:"APPLE 10 FLUS",
//         rating:4,
//         description:"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.",
//         price:250,
//         images:"https://www.bing.com/th?id=OP.n7k8s%2fxDG2yq%2fw474C474&o=5&pid=21.1"
//     },
//     {
//         id:1,
//         productName:"IPHONE 10 FLUS",
//         rating:2,
//         description:"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.",
//         price:204,
//         images:"https://www.bing.com/th?id=OP.n7k8s%2fxDG2yq%2fw474C474&o=5&pid=21.1"
//     },
//     {
//         id:3,
//         productName:"SANNSYUBG 10 FLUS",
//         rating:4,
//         description:"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.",
//         price:400,
//         images:"https://www.bing.com/th?id=OP.n7k8s%2fxDG2yq%2fw474C474&o=5&pid=21.1"
//     }
// ];
//localStorage.setItem("data",JSON.stringify(initData));
var initData = [];
 initData = JSON.parse(localStorage.getItem("data"));
const myReducer = (state = initData,action)=>{
    switch (action.type) {
        case typeActions.GET_DATA:{
          return [...state];
        }  
        default:
            return state;
    }
}
export default myReducer;