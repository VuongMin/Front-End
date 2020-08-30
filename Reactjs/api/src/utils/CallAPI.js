import * as typeRequest from '../contans/ConstansAPI'
const axios = require('axios').default; //varlirable func
export  default function CallApi(method="GET",urlEndcode,responeType,data){
   return axios({
        method:method,
        url:`${typeRequest.ORI_URL}/${urlEndcode}`,
        responseType:responeType,
        data:data
    }).catch(err=>{
      console.log(err);
    })
} 
