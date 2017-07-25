


// correction


var egalAction = $('#buttonForm');

egalAction.click(function(){

	var imput1 = $('#imput1');
	var imput2 = $('#imput2');

});


function add (a, b){

	return parseInt(a+b);

}

function soustract (a, b){

	return parseInt(a-b);

}

function multiply (a, b){

	return parseInt(a*b);

}

function divide (a, b){

	if(b != 0){

	return parseInt(a/b);

	}

	return "error";

}

$('#buttonForm').click(function(){

	var imput1 = $('#imput1').val();
	var imput2 = $('#imput2').val();
	var operator = $('#selectOperation').val();
	var result;


if(operator === '+'){

	add(imput1, imput2);

}

if(operator === '-'){

	soustract(imput1, imput2);
}

if(operator === '*'){

	multiply(imput1, imput2);
}

if(operator === '/'){

	divide(imput1, imput2);
}

$("#result").text(result);

});