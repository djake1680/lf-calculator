var operand;

$(document).ready(function(){
$("#add_button").click(function(){
	operand = "+";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	number_sum(num_enter_0, operand, num_enter_1);
});
});

$(document).ready(function(){
$("#sub_button").click(function(){
	operand = "-";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	number_sum(num_enter_0, operand, num_enter_1);
});
});

$(document).ready(function(){
$("#multiply_button").click(function(){
	operand = "*";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	number_sum(num_enter_0, operand, num_enter_1);
});
});

$(document).ready(function(){
$("#divide_button").click(function(){
	operand = "/";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	number_sum(num_enter_0, operand, num_enter_1);
});
});

function number_sum(number1, operand, number2){
	number1 = parseFloat(number1);
	number2 = parseFloat(number2);
	console.log(number1, operand, number2);

	switch(operand) {
		case "+":
		$(".result_display").text(number1 + number2);
		break;

		case "-":
		$(".result_display").text(number1 - number2);
		break;

		case "*":
		$(".result_display").text(number1 * number2);
		break;

		case "/":
			if (number2 != 0) {
				$(".result_display").text(number1 / number2);
				break;
			}
			else {
				$(".result_display").text("Error");
				break;
			}

	}
}