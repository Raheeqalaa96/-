
var menu = document.getElementById("navBar");
var nav = document.getElementsByClassName("contacts");
for(var i=0; i<nav.length; i++)
{
    nav[i].addEventListener("click", function(){
       
        if (menu.style.display === "none") {
            menu.style.display = "block";
          }
         else {
            menu.style.display = "none";
          }



    });
}


// function back1()
// {
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//       }

// }

//  document.addEventListener("click", function(){
 
//     if (menu.style.display === "block ") {
//         alert("hi")
//         menu.style.display = "none";
//       }
 

// });

