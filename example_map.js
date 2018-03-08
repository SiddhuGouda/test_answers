var arr = [
     {name:"Shubham", age:12},
     {name:"John", age:20},
     {name:"Stacy", age:35}
 ];

 var reformatedArray = arr.map(obj => {
       var rObj = {};
       rObj[obj.name] = obj.age;
       return rObj;
 });

 reformatedarray.forEach(function(e){
         console.log(e);
 });

 //Result will be
 {
 	 Shubham : 12
 }
 {
 	John: 20
 }
 {
 	Stacy: 35
 }

 