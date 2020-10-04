     //A callback function is a function that is passed as an argument to another function, 
     //to be “called back” at a later time when other function's routine is completed.
     // it is used when  taking data from server which take time , its used to handel that situation without any error

     // THE CASE IS
     // let we have two diffrent functions one of these print just in a second
     // the other function take 5 sec to be print on page 
     // but both are important to be print at a same time 

     //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

     //  const posts = [
     //      { title: "title one", body: "this is body text one" },
     //      { title: "title two", body: "this is body text two" }, //this is just an array of object
     //  ]

     //  //creating a function for getting 'posts' which is upp below to this

     //  function getPosts() {
     //      let outPut = ""; // its a blank variable
     //      setTimeout(() => { // where we used setTimeOut for manualyy delay just for testing and understanding



     //          //valueOfPost doing itration here down below
     //          posts.forEach((valueOfPosts) => { // forEach is used for running loop and ' ()=>  this is called callback function  '

     //              outPut += `<li>${posts.title}</li>` //assigned a empety variable to new value
     //              document.body.innerHTML = outPut; // we want to print this in our body page or we can console it to check

     //          })

     //      }, 1000); //in setTimeout here we have to mention delay time which is count as mili second 1000ms = 1 sec
     //  }


     //  getPosts(); //calling the function

     // creating another function
     //  function updatedPost(post1) {
     //     setTimeout(() => {
     //         posts.push(post1);


     //     }, 2000);
     // }

     // updatedPost({ title: "title three", body: "this is body text three" });


     // now second function is not running because they both have diffrent time period to be print
     // for this issue we use callback function





     //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//

     const posts = [
         { title: "title one", body: "this is body text one" },
         { title: "title two", body: "this is body text two" },
     ]

     function getPosts() {
         let outPut = "";
         setTimeout(() => {
             posts.forEach((valueOfPosts) => {
                 outPut += `<br>${valueOfPosts.title}`
                 document.body.innerHTML = outPut;
             })

         }, 1000);
     }


     //  getPosts();

     function updatedPost(post1, callback) {
         setTimeout(() => {
             posts.push(post1);

             callback();


         }, 2000);
     }

     updatedPost({ title: "title three", body: "this is body text three" }, getPosts); //here we passed two arguments to parameters


     // now its working perfectly