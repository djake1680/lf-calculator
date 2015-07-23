var operator;
var first_array_number = 0;
var number_array = ["",""];
var clear_screen;
var my_operator;


$(document).ready(function(){
	//Enters number of the button you clicked on, and keeps adding to it with new numbers
$(".button_clk").click(function(){
	console.log($(this).text());
	var button_no = $(this).text();
	var new_number = $(".calc_screen").val();
	var current_input = new_number + button_no;
	$(".calc_screen").val(current_input);
	number_array[first_array_number]+=button_no;
});

//when hit =, passes the array items and operator to number_sum function
$(".equals").click(function(){ 
	console.log($(this).text());
	number_sum(number_array[0], my_operator, number_array[1]);
});
});
function clear_function(){
	console.log('worked');
	number_array = ["",""];
	$(".calc_screen").val("");
	first_array_number = 0;
}

//put all numbers and operators in display

function get_display(operator_new){
	var first_number = $(".calc_screen").val();
	$(".calc_screen").val(first_number + operator_new);//to clear the screen so number starts over
	first_array_number = 1;
	my_operator = operator_new;
}

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