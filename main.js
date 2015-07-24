var operator;
var first_array_number = 0;
var number_array = ["",""];
var clear_screen;
var my_operator;
var current_input;

$(document).ready(function(){
	//Enters number of the button you clicked on, and keeps adding to it with new numbers
$(".button_clk").click(function(){
	console.log($(this).text());
	var button_no = $(this).text();
	var new_number = $(".calc_screen").val();
	current_input = new_number + button_no;
	$(".calc_screen").val(current_input);
	number_array[first_array_number]+=button_no;
});


//when hit =, passes the array items and operator to number_sum function
$(".equals").click(function(){
	number_sum(number_array[0], my_operator, number_array[1]);
});

//to clear the screen when "CLEAR" is clicked
$("#clear_screen").click(function(){
	number_array = ["",""];
	$(".calc_screen").val("");
	first_array_number = 0;
});
//put all numbers and operators in display
	$(".operator_click").click(function(){
		var clicked_operator = $(this).text();
		console.log(clicked_operator);
		var first_number = $(".calc_screen").val();
		$(".calc_screen").val(first_number + clicked_operator);
		first_array_number = 1;
		my_operator = clicked_operator;

	});

});

//function takes your two numbers and the operator
function number_sum(number1, operator, number2){
	number1 = parseFloat(number1);
	number2 = parseFloat(number2);
	console.log(number1, operator, number2);

//switch finds what operator you used, and then calculates based off of the operator
	switch(operator) {
		case "+":
		$(".calc_screen").val(number1 + number2);
		break;


		case "-":
		$(".calc_screen").val(number1 - number2);
		break;

		case "*":
		$(".calc_screen").val(number1 * number2);
		break;

		case "/":
			if (number2 != 0) {
				$(".calc_screen").val(number1 / number2);
				break;
			}
			else {
				$(".calc_screen").val("Error");
				break;
			}

	}
}