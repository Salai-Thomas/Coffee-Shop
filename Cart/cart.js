$(document).ready(function(){
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
    <td class="text-end">${line.qty * line.price}</td>
    </tr>`
  );

});



});