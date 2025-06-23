// import Typed from 'typed.js';

//     const input = document.getElementById("search-input");
//     const placeholder = document.querySelector(".typed-placeholder");

//     // Hide animation when user types
//     input.addEventListener("#search-input", () => {
//       placeholder.style.display = input.value ? "none" : "block";
//     });

//     // Typed.js init
//     var typed = new Typed("#typed", {
//       strings: ["Coffee", "Snacks", "Desserts", "Cold Brew", "Croissants"],
//       typeSpeed: 70,
//       backSpeed: 40,
//       backDelay: 1500,
//       loop: true
//     });
$(document).ready(function(){
// Home Page
$('.btn-close').click(function(){
  $('#myModal').removeClass("show");
});



//Cart Page

let orderlines = [
  {"product":"Cappuccino","price":20,"qty":2},
  {"product":"Choco Cappuccino","price":20,"qty":3},
  {"product":"Choco Coffee","price":30,"qty":4},
];

orderlines.forEach(function(line,index){

  $('#orderlines').append(
    `<tr id="item${index}">
    <td>${line.product}</td>
    <td>${line.price}</td>
    <td class="text-center"><a class="btn "><i class="bi bi-plus-circle"></i></a>${line.qty}<a class="btn"><i class="bi bi-dash-circle"></i></a></td>
    <td class="text-end">${line.qty *line.price}</td>
    </tr>`
  );

});



});




