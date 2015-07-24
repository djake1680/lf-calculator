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
    if(number_array[1]) {
        console.log("second");
        var neg_pos = parseFloat(number_array[1]);
        neg_pos = neg_pos * -1;
        console.log(neg_pos);
        number_array[1] = neg_pos;
    }
    else {
        console.log("first");
    }


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
    // clears last number entered
    $("#clear_last").click(function(){
        console.log("clear_last worked");
        if (number_array[1]){
            console.log("second index of array");
            number_array[1] = ("");
            current_input = number_array[0] + clicked_operator;
            $(".calc_screen").val(current_input);
        }
        else {
            console.log("first index of array");
            number_array = ["",""];
            $(".calc_screen").val("");
            first_array_number = 0;
        }
    });
//put all numbers and operators in display
    //DWP THIS ONE
	$(".operator_click").click(function(){ //begins when you click on an operator (any operator)
		clicked_operator = $(this).text(); //finds which operator (+ - * /) you clicked
		console.log(clicked_operator);
		var first_number = $(".calc_screen").val(); //gets the first number you entered from the screen
		$(".calc_screen").val(first_number + clicked_operator); //send new string including the operator to the screen
		first_array_number = 1; //changes which array index you're going to save to


        //if the array[1] is not empty, send to number_sum to calculate
            if (number_array[1] != ""){ //if array position [1] is not empty
                number_math(number_array[0], clicked_operator, number_array[1]); //send array[0], [1], and the operator to the math function
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
function number_math(number1, operator, number2){ //pulls in number_array[0], [1], and the operator when called
	number1 = parseFloat(number1); //turns number1 into a float
	number2 = parseFloat(number2); //turns number2 into a float
	console.log(number1, operator, number2);

//switch finds what operator you used, and then calculates based off of the operator
	switch(operator) { //based on the operator string it will do calculation to number1 and number2
		case "+": //if operator string is a plus
		$(".calc_screen").val(number1 + number2); //send to the screen the value of both numbers added together
		break; //stop looking for what operator was used


		case "-": //if operator string is a minus
		$(".calc_screen").val(number1 - number2); //send to the screen the value of number1 minus number2
		break; //stop looking for what operator was used

		case "*": //if operator string is a *
		$(".calc_screen").val(number1 * number2); //send to the screen the value of number1 times number2
		break; //stop looking for what operator was used

		case "/": //if operator string is a /
			if (number2 != 0) { //if second number is not 0
				$(".calc_screen").val(number1 / number2); //send to the screen the value of number1 divided by number2
				break; //stop the function
			}
			else { //if second number IS 0
				$(".calc_screen").val("Error"); //send to the screen an error message
				break; //stop the function
			}

	}
}