$(document).ready(function(){
// Home Page
$('.btn-close').click(function(){
  $('#myModal').removeClass("show");
});

//Cart Page

let orderlines = [
  {"product":"producta","price":20,"qty":2},
  {"product":"productb","price":20,"qty":3},
  {"product":"productc","price":30,"qty":4},
];

orderlines.forEach(function(index,line){

  $('#orderlines').append(
    `<tr id="item${line}">
    <td>${line.product}</td>
    <td>${line.price}</td>
    <td class="text-center">${line.qty}</td>
    <td class="text-end">${line.qty *line.price}</td>
    </tr>`
  );
});

});




