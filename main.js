var operator;
var first_array_number = 0;
var number_array = ["",""];
var clear_screen;
var my_operator;
var current_input;
var clicked_operator;
<<<<<<< HEAD
var button_no;
=======
var second_negative;
var newest_negative;
var new_number;
var first_number;
>>>>>>> C5_djake1680_tflew


$(document).ready(function(){
    first_array_number = 0;
	//Enters number of the button you clicked on, and keeps adding to it with new numbers
$(".button_clk").click(function(){ //button_clk is the number you clicked
	console.log($(this).text());
<<<<<<< HEAD
	button_no = $(this).text(); //assigns button_no to the text field in the button
	var new_number = $(".calc_screen").val();  //assigns new_number to what's showing in the calc_screen
=======
	var button_no = $(this).text(); //assigns button_no to the text field in the button
	new_number = $(".calc_screen").val();  //assigns new_number to what's showing in the calc_screen
>>>>>>> C5_djake1680_tflew
	current_input = new_number + button_no;
	$(".calc_screen").val(current_input);  //returns current_input to calc_screen input field
	number_array[first_array_number]+=button_no;  //every time you hit a number button it adds to the array you're on
    console.log(number_array[first_array_number]);
});

    //turns number negative or positive based on +/-.  screen doesn't work on 2nd number but functions properly
$("#pos_to_neg").click(function(){
   console.log("positive to negative");

    if (first_array_number == 0) {

        negative_pos = parseFloat(number_array[0]);
        if ((negative_pos >= 0) || (number_array[0] == "")) {
            console.log(negative_pos);
            console.log("first")
            var neg_pos = "-" + number_array[0];
            //neg_pos = neg_pos * -1;
            console.log(neg_pos);
            number_array[0] = neg_pos;
            $(".calc_screen").val(neg_pos);
        }
        else {
            console.log("woah");
            var pos_neg = number_array[0];
            var positive_neg = pos_neg.slice(1);
            console.log(positive_neg);
            number_array[0] = positive_neg;
            $(".calc_screen").val(positive_neg);
        }
    }

    else {
        negative_pos = parseFloat(number_array[1]);
        if ((negative_pos >= 0) || (number_array[1] == "")) {
            console.log("second");
            var neg_pos = "-" + number_array[1];
            number_array[1] = neg_pos;
            second_negative = $(".calc_screen").val();
            $(".calc_screen").val(second_negative + neg_pos);
        }
        else {
            var neg_to_positive = number_array[1];
            var negative_2_positive = neg_to_positive.slice(1);
            number_array[1] = negative_2_positive;
            console.log(negative_2_positive);
            $(".calc_screen").val(number_array[0]);

        }
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
<<<<<<< HEAD

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
=======
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
>>>>>>> C5_djake1680_tflew
//put all numbers and operators in display
    //DWP THIS ONE
	$(".operator_click").click(function(){ //begins when you click on an operator (any operator)
        if ((number_array[0] != "") && (number_array[1] != "")){
            number_math(number_array[0], clicked_operator, number_array[1]);
        }
        else
        {
            clicked_operator = $(this).text(); //finds which operator (+ - * /) you clicked
            console.log(clicked_operator);
            //var first_number = $(".calc_screen").val(); //gets the first number you entered from the screen
            first_number = number_array[0]; //instead of getting first number from screen
            $(".calc_screen").val(first_number + clicked_operator); //send new string including the operator to the screen
            first_array_number = 1; //changes which array index you're going to save to
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