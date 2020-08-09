//create method map2 like array.map()
var course =[
    {id:0,name:"OPP",duration:20},
    {id:1,name:"JAVA",duration:9},
    {id:2,name:"PHP",duration:2},
    {id:3,name:"C#",duration:6},
];
Array.prototype.map2=function(fn){
     let arr=[];
    
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            // const element = this[key];//get element of obj call to map2
           //callbac
           let e =  fn(this[key]);
           arr.push(e);
            
        }

    }
    return arr;
}
Array.prototype.forEach2=function(fn){
    for(key in this){
        if(this.hasOwnProperty(key)){
            fn(this[key],key);
        }
    }
}
Array.prototype.filter2=function(fn){
    let arr = [];
    for(key in this){
        if(this.hasOwnProperty(key)){
            if( fn(this[key])==true){
               arr.push(this[key]);  
            }
        }
    }
    return arr;
}
var res = course.map2(function(item){
            return item;
});
//foreach 
   course.forEach2(function(item,index){
         console.log(`item:${JSON.stringify(item)} - index :${index}`);
   });
//filter
var eFilter =  course.filter2(function(item){
       return item.duration>6;
});
console.log(eFilter);