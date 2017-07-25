


// correction


var egalAction = $('#buttonForm');

egalAction.click(function(){

	var imput1 = $('#input1');
	var imput2 = $('#input2');

});


function add (a, b){

	return parseInt(a)+parseInt(b);

}

function soustract (a, b){

	return parseInt(a)-parseInt(b);

}

function multiply (a, b){

	return parseInt(a)*parseInt(b);

}

function divide (a, b){

	if(b != 0){

	return parseInt(a)/parseInt(b);

	}

	return "error";

}

$('#buttonForm').click(function(){

	var imput1 = $('#input1').val();
	var imput2 = $('#input2').val();
	var operator = $('#selectOperation').val();
	var result;

if(operator === '+'){

	result=add(imput1, imput2);


}

if(operator === '-'){

	result=soustract(imput1, imput2);
}

if(operator === '*'){

	result=multiply(imput1, imput2);
}

if(operator === '/'){

	result=divide(imput1, imput2);
}

$("#result").text(result);

});

// partie 1 fonctionne