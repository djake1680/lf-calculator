var operator;
var first_array_number = 0;
var number_array = ["",""];
var clear_screen;
var my_operator;
var current_input;
var clicked_operator;


$(document).ready(function(){ //
	//Enters number of the button you clicked on, and keeps adding to it with new numbers
$(".button_clk").click(function(){ //button_clk is the number you clicked
	console.log($(this).text());
	var button_no = $(this).text(); //assigns button_no to the text field in the button
	var new_number = $(".calc_screen").val();  //assigns new_number to what's showing in the calc_screen
	current_input = new_number + button_no;
	$(".calc_screen").val(current_input);  //returns current_input to calc_screen input field
	number_array[first_array_number]+=button_no;  //every time you hit a number button it adds to the array you're on
    console.log(number_array[first_array_number]);
});

$("#pos_to_neg").click(function(){
   console.log("positive to negative");

});


//when hit =, passes the array items and operator to number_sum function
$(".equals").click(function(){
    number_math(number_array[0], clicked_operator, number_array[1]);
});

//to clear the everything when "A/C" is clicked
$("#clear_screen").click(function(){
	number_array = ["",""];
	$(".calc_screen").val("");
	first_array_number = 0;
});
//put all numbers and operators in display
	$(".operator_click").click(function(){
		clicked_operator = $(this).text(); //finds which + - * / you clicked
		console.log(clicked_operator);
		var first_number = $(".calc_screen").val(); //gets the first number you entered from the screen
		$(".calc_screen").val(first_number + clicked_operator);
		first_array_number = 1; //changes which array index you're going to save to


        //if the array[1] is not empty, send to number_sum to calculate
            if (number_array[1] != ""){
                number_math(number_array[0], clicked_operator, number_array[1]);
                console.log("1");
            }
	});

});

/******
 * function name: number_math
 * purpose: to take all 3 things needed to do a calculation (2 numbers and the operator)
 *  and get the total.  Uses switch to determine if it should use + - * /, and then calculates.
 *  After this it sends the total to the display.
 * @param number1: number_array[0]
 * @param operator: clicked_operator
 * @param number2: number_array[1]
 */
function number_math(number1, operator, number2){
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