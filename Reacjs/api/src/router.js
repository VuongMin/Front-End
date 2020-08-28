import React from 'react'
import Home from './pages/Home/Home';
import NotFound_404 from './pages/NotFound/NotFound_404';
import ProductListPage from './pages/ProductList/ProductListPage';
import ProductPost from './pages/ProductAction/ProductPost'
const Router = [ 
    {
      path:"/",
      name:"home",
      exact:true,
      component:()=>{
         return <Home/>
      } 
    },
    {
      path:"/products",
      name:"ProductListPage",
      exact:true,
      component:()=>{
         return <ProductListPage />
      } 
    },
    {
      path:"/products/add",
      name:"ProducADD",
      exact:true,
      component:({history})=>{
         return <ProductPost history={history}/>
      } 
    },
    {
      path:"/products/edit/:id",
      name:"ProducEdit",
      exact:true,
      component:({match,history})=>{
         return <ProductPost history={history} match={match}/>
      } 
    },
    {
        path:"",
        name:"home",
        exact:false,
        component:()=>{
           return <NotFound_404/>
        } 
      }
];
export default Router;