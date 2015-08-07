var array_number = 0; //index number of number_array
var number_array = [""]; //array that holds all values and operators
var current_input;
var clicked_operator;
var button_no;
var new_number;
var math_total;
var equals_math = 0;
var new_operator = 0;
var decimal = 0;
var num_output = "";


$(document).ready(function(){
    array_number = 0;
	//Enters number of the button you clicked on, and keeps adding to it with new numbers
$(".button_clk").click(function(){ //button_clk is the number you clicked
	button_no = $(this).text(); //assigns button_no to the text field in the button

    //this is to make sure decimal is only used once-works
    if (button_no == ".") {
        console.log('decimal');
        decimal += 1;
        if (decimal == 0 || decimal == 1){
            new_number = $(".calc_screen").val();  //assigns new_number to what's showing in the calc_screen
            current_input = new_number + button_no;
            $(".calc_screen").val(current_input);  //returns current_input to calc_screen input field
            number_array[array_number]+=button_no;

        }
        else {
            console.log("too many decimals");
        }
    }

    else if (button_no != ".") {
        new_number = $(".calc_screen").val();  //assigns new_number to what's showing in the calc_screen
        current_input = new_number + button_no;
        $(".calc_screen").val(current_input);  //returns current_input to calc_screen input field
        number_array[array_number] += button_no;  //every time you hit a number button it adds to the array you're on
    }
    new_operator = 1;
});

    $(".operator_click").click(function(){ //begins when you click on an operator (any operator)
        if (new_operator == 1) {
            clicked_operator = $(this).text();

            if (clicked_operator == "xY"){
                clicked_operator = "e";
            }


            array_number += 1; //changes which array index you're going to save to
            number_array[array_number] = clicked_operator
            new_number = $(".calc_screen").val();
            current_input = new_number + clicked_operator;
            $(".calc_screen").val(current_input);
            array_number += 1;
            number_array.push("");
            new_operator = 0;
            decimal = 0;
        }

    });

    //turns number negative or positive based on +/-.
$("#pos_to_neg").click(function(){

    if (array_number == 0) { //if it's still on the first array index

        negative_pos = parseFloat(number_array[0]);
        if ((negative_pos >= 0) || (number_array[0] == "")) {
            console.log(negative_pos);
            console.log("first");
            var neg_pos = "-" + number_array[0];
            number_array[0] = neg_pos;
            $(".calc_screen").val(neg_pos);
        }
        else {
            console.log("woah");
            var pos_neg = number_array[0];
            var positive_neg = pos_neg.slice(1);
            number_array[0] = positive_neg;
            $(".calc_screen").val(positive_neg);
        }
    }

    else { //if it gets here it's on the second index of the array
        negative_pos = parseFloat(number_array[array_number]);
        console.log(negative_pos);
        if ((negative_pos >= 0) || (number_array[array_number] == "")) {
            num_output = "";
            console.log("number is positive to negative");
            var neg_pos = "-" + number_array[array_number];
            number_array[array_number] = neg_pos;
            console.log(number_array[array_number]);

            for (var i = 0; i < number_array.length; i++) {
                num_output = num_output + number_array[i];
            }
            $(".calc_screen").val(num_output);
        }

       else {
            num_output = "";
            console.log("Number is positive and needs to be negative");
            var neg_to_positive = number_array[array_number];
            var negative_2_positive = neg_to_positive.slice(1);
            number_array[array_number] = negative_2_positive;
            console.log(negative_2_positive);

            for (var i = 0; i < number_array.length; i++) {
                num_output = num_output + number_array[i];
            }
            $(".calc_screen").val(num_output);

        }
    }

});

//when hit =, passes the array items and operator to number_sum function
$(".equals").click(function() {
    console.log(number_array);
    if (number_array[0] != "" && number_array[2] != "") {
        for (var i = 0; i <= number_array.length; i++){
            //console.log(number_array[i]);
            var num1 = number_array[0];
            var operator_picked = number_array[1];
            var num2 = number_array[2];
            number_math(num1, operator_picked, num2);
            number_array.splice(1,2);
            number_array[0] = math_total;

        }
        $(".calc_screen").val(math_total);
    }
    /*if (number_array[0] != "" && number_array[1] != "") { //this means there's a number in the first 2 index spots
        number_math(number_array[0], clicked_operator, number_array[1]);
        $(".calc_screen").val(math_total);
        number_array = [math_total, ""];
        equals_math = 1;
        console.log("equals_math = " + equals_math);
    }
    else if (equals_math == 1){ // equals_math makes sure a calculation has been done, ensuring there's an operator
        number_array[1] = number_array[0];
        number_math(number_array[0], clicked_operator, number_array[1]);
        number_array = [math_total, ""];
        $(".calc_screen").val(math_total);
    }*/
});

//to clear everything when "A/C" is clicked
$("#clear_screen").click(function(){
	number_array = [""];
	$(".calc_screen").val("");
	array_number = 0;
    num_output = "";
});

// clears last number entered
$("#clear_last").click(function(){
    num_output = "";
    number_array[array_number] = "";

    for (var i = 0; i < number_array.length; i++) {
        num_output = num_output + number_array[i];
    }
    $(".calc_screen").val(num_output);
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
    decimal = 0;
    console.log(number1, operator, number2);
	number1 = parseFloat(number1); //turns number1 into a float
	number2 = parseFloat(number2); //turns number2 into a float

//switch finds what operator you used, and then calculates based off of the operator
	switch(operator) { //based on the operator string it will do calculation to number1 and number2
		case "+": //if operator string is a plus
        math_total = number1 + number2;
		break; //stop looking for what operator was used


		case "-": //if operator string is a minus
        math_total = number1 - number2;
		break; //stop looking for what operator was used

		case "*": //if operator string is a *
		math_total = number1 * number2;
		break; //stop looking for what operator was used

		case "/": //if operator string is a /
			if (number2 != 0) { //if second number is not 0
				math_total = number1 / number2; //send to the screen the value of number1 divided by number2
				break; //stop the function
			}
			else { //if second number IS 0
				//$(".calc_screen").val("Error"); //send to the screen an error message
                math_total = "Error";
				break; //stop the function
			}

        case "e":
            console.log("exponent finds");
            math_total = Math.pow(number1, number2);
            break;


	}

}
/*******
 *  operand_array = ["", ""]
 *  index_pointer = 0
 *  input_array["1", "+", "97", "/", "8", * "4"]
 *  op_array = ["+", "-", "*", "/"]
 *
 *  for (var i = 0; i < input_array.length; i++)
 *      if (! isNaN(input_array[i])) //is it a number?
 *      if (op_array.indexOf(input_array[i] !== -1))
 *
 *
 */