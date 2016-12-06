
$(document).ready(function(){
    $('#submit').click(testwrite);// id of submit gets testwrite run on it

// var checkBox = ["<input type=\"checkbox\">", "<br>"];
//var to put input box contents into
//

});

function testwrite(){
    $('#list').append("<li>"+$('#text-field').val() + '<img src="img/redx.gif" class="remove">'+ "</li>");
      $('li').children('img').click(removeItem);
}

function removeItem() {
    $(this).parent('li').remove();
}

// $("#remove").click(function() {
//   $(this).parent('li').remove();
//
// }


// $('#list').append("<li>"+$('#text-field').val() +"</li>");

// function checkBox(){
//     $(testwrite()).append("<input type=\"checkbox\">", "<br>");
// }
//
// $('remove').removeItem($(this).parent('li').remove());
// function removeItem() {
//     $(this).parent('li').remove();
// }

//
// $("#submit").click(function() {
//     newTask = $("#newTask").val(); //newTask is the id for the div the text(inout) box
