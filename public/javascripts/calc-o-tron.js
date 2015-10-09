/**
 * Created by gfrethem on 10/8/15.
 */
$(function() {
    $(".plus, .minus, .divide, .multiply").on('click', function() {
        $(".plus, .minus, .divide, .multiply").removeClass('selected');
           $(this).addClass('selected');

       });

    $(".equals").on('click', function() {
        if (!($(".selected").attr("id"))) {
            alert("Please select an operator!");
        } else {
            var calculateData = {"firstOperand": $("#firstOperand").val(),
                                "secondOperand": $("#secondOperand").val(),
                                "operator": $(".selected").attr("id")};
            console.log(calculateData);
            $.ajax({
                type: "POST",
                url: "/calculate",
                data: calculateData,
                success: function (response) {
                    $(".results").children().remove();
                    $(".results").append('<h3>The answer is: ' + response + '</h3>');
                }
            });
        }


    });







   });




