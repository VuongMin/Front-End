


//contructor function === class 
function Validator(options){
    var rules = {};//mutil rules
   /**
    * options have idform and array rules => in rules [selector , func test()]
    * step 1: get selector
    */
    var eForm=document.querySelector(options.form);
    //foreach rules to get selector and set event for every element
    if(eForm){
        //process form submit
        eForm.onsubmit = function(e){
            e.preventDefault();
            let isValid=true;
            options.rules.forEach(function(itemElement){
                let eEvent= eForm.querySelector(itemElement.selector);
                let mes=itemElement.test(eEvent.value);
               
                if(mes){
                    eEvent.nextElementSibling.innerHTML=mes;
                        eEvent.parentElement.classList.add("invalid");
                        isValid=false;
                }

            });
            if(isValid){
             //callback onSubmit
              if(typeof options.onSubmit ==="function"){
                  let formValues = eForm.querySelectorAll("[name]");
                  let resultValues = Array.from(formValues).reduce(function(values,inputItem){
                 
                        values[inputItem["name"]]=inputItem.value;
                 
                    return values;
                  },{});

                  options.onSubmit(resultValues);
              
              }else{//submit default when not callback onsubmit
                  eForm.submit();
              }
            }
            
        }
        //each rules
     options.rules.forEach(function(itemElement) {
         //mutil rules
         if(Array.isArray(rules[itemElement.selector])){
             rules[itemElement.selector].push(itemElement.test);
         }else{
             rules[itemElement.selector]=[itemElement.test];
         }
         //Event
         let eEvent= eForm.querySelector(itemElement.selector);
         if(eEvent){
             eEvent.onblur=function(){
                 //callback use test to write log
                //  let mes =   itemElement.test(this.value);
                 let allRule = rules[itemElement.selector];
                 for(let i=0;i<allRule.length;i++){
                     let mes=allRule[i](this.value);
                     if(mes){
                        //set mes for nextelementsibling
                        eEvent.nextElementSibling.innerHTML=mes;
                        eEvent.parentElement.classList.add("invalid");
                        break;
                     } 
                 }
                
             }
             eEvent.oninput=function(){
                eEvent.parentElement.classList.remove("invalid");
                eEvent.nextElementSibling.innerHTML="";
             }
         }
     });

    }

}
//delarce function process
Validator.isRequire=function(selector,mes){
   return {
       selector:selector,
       test:function(value){
          //process validate valid and return messege
          //undefined :valid  !!! invalid 
          return value.trim()?undefined:"this field is not empty!" && mes;
       }
   }
}
Validator.isEmail=function(selector,mes){
   return {
       selector:selector,
       test:function(value){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase())?undefined :"Email is invalid!" && mes;
       }
   }
}
Validator.isMinLength=function(selector){
     return {
         selector:selector,
         test:function(value){
             return value.trim().length == 6 ?undefined:"Email is requile length ==6 !"; 
         }
     }
}
Validator.isCofirm=function(seclector,selectorPass,mes){
    return {
        selector:seclector,
        test:function(value){
             let pass=selectorPass.value;
            return value.trim()==pass.trim() ? undefined:"Password is wrong!" && mes;
        }
    }
}