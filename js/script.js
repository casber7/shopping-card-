
var $input = $("#txtValue");
$input.val(0);
$(".button").click(function(){
    if ($(this).hasClass('increase'))
        $input.val(parseInt($input.val())+1);
    else if ($input.val()>=1)
        $input.val(parseInt($input.val())-1);
});

var $input2 = $("#txtValue2");
$input2.val(0);
$(".button2").click(function(){
    if ($(this).hasClass('increase2'))
        $input2.val(parseInt($input2.val())+1);
    else if ($input2.val()>=1)
        $input2.val(parseInt($input2.val())-1);
});

var $input3 = $("#txtValue3");
$input3.val(0);
$(".button3").click(function(){
    if ($(this).hasClass('increase3'))
        $input3.val(parseInt($input3.val())+1);
    else if ($input3.val()>=1)
        $input3.val(parseInt($input3.val())-1);
});

/*delete product*/ 
var removeItemButton = document.getElementsByClassName('cancle-btn')
console.log(removeItemButton)
for (var i = 0 ; i<removeItemButton.length ; i++){
    var button = removeItemButton[i]
    button.addEventListener('click' , function(event){

        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
       
    })
}


/* update total price*/




var subtotal = 0;







$(document).ready(function(){

    //iterate through each textboxes and add keyup
    //handler to trigger sum event
    $(".txtValue").each(function() {

        $(this).keyup(function(){
            calculateSum();
        });
    });

});

$(document).ready(function() {
    $('.increase').click(function() {
       $('#total').text(parseInt($('#total').text()) + parseInt($(this).data('amount')));
    });
  })
  $(document).ready(function() {
    $('.decrease').click(function() {
       $('#total').text(parseInt($('#total').text()) + parseInt($(this).data('amount')));
    });
  })