var operand;

function add_numbers(){
	operand = "+";
	var num_enter_0 = $(".number_0").val();
	var num_enter_1 = $(".number_1").val();
	num_enter_0 = parseFloat(num_enter_0);
	num_enter_1 = parseFloat(num_enter_1);
	var sum = num_enter_0 + num_enter_1;
	$(".result_display").text(sum);
	console.log(sum);
}