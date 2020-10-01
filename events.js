var con = document.getElementsByClassName('.container')
console.log(con);




//created a onclick = clicked funtion in html button element.
function clicked() {
    console.log('the button was clicked')
}

//another event funtionn 

window.onload = function() {
    console.log('the page is loded')
}







//.querySelector is used for targeting css tags


var sel = document.querySelectorAll('.container');
console.log(sel);


var elem = document.getElementById('cont');
console.log(elem)



// template literals