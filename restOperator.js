   // restOpertor 
   // 'restValues' = ... 
   //syntax  is same as like  destructuring of an array or an object

   // let {value which you want to destructure , then 'restOperator...' value2/variable2} = objectName

   let myobj = {
       fname: "asad",
       lname: "suleman",
       city: "karachi"

   }

   // destructuring  
   let { fname, ...restvalues } = myobj; //here we used rest operator which assigned all the rest values of myObj into variable called restvalues.

   console.log(fname, " restValues =", restvalues);


   let newobj = {
       fname1: "asad1",
       lname1: "suleman",
       city1: {
           city1: "karachi",
           city2: "turbat"
       }
   }

   let { fname1, ...nestedvalues } = newobj;
   console.log(fname1, "checking", nestedvalues);
   // we can also use  restOperator in nested