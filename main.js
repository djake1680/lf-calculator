var operator;
var first_array_number = 0;
var number_array = ["",""];
var clear_screen;
var my_operator;

//Enters number of the button you clicked on, and keeps adding to it with new numbers
function button_click(button_number){
	var new_number = $(".calc_screen").val();
	var current_input = new_number + button_number;
	$(".calc_screen").val(current_input);
	number_array[first_array_number]+=button_number;
}

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
//when = entered, use all 3 parameters for number_sum
function number_equal(){
	console.log(my_operator);
	number_sum(number_array[0], my_operator, number_array[1]);
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

/*$(document).ready(function(){

//finds 2 numbers in the input field, and then passes them along with + to number_sum function
$("#add_button").click(function(){
	operator = "+";
	//var num_enter_0 = $(".number_0").val();
	//var num_enter_1 = $(".number_1").val();
	var num_enter_0 = number_array[0];
	var num_enter_1 = number_array[1];
	console.log(number_enter_0);
	number_sum(num_enter_0, operator, num_enter_1);
});
//finds 2 numbers in the input field, and then passes them along with - to number_sum function
$("#sub_button").click(function(){
	operator = "-";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	number_sum(num_enter_0, operator, num_enter_1);
});
//finds 2 numbers in the input field, and then passes them along with * to number_sum function
$("#multiply_button").click(function(){
	operator = "*";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	number_sum(num_enter_0, operator, num_enter_1);
});
//finds 2 numbers in the input field, and then passes them along with / to number_sum function
$("#divide_button").click(function(){
	operator = "/";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	number_sum(num_enter_0, operator, num_enter_1);
});
});*/