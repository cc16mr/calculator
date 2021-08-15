let memory, oldValue, result, fullValue, number, i, mValue, mValueKeep, r = 0;
let aux = false;


function selectNumber(number){
	if (number==='.'){
		dot(number);
		if(i===0){
			i++;
		}
		return;
	}

	if (aux===true || document.getElementById('currentNumber').innerHTML === '0') {
		document.getElementById('currentNumber').innerHTML=number;
		aux=false;
		return;
	}

	numberExceededLimit();

	document.getElementById('currentNumber').innerHTML+=number;
}


function numberExceededLimit(){
	counter=document.getElementById('currentNumber').innerHTML;
	counter=counter.toString();
	if(counter.length>16){
		counter = counter.substring(0, 16);

		//	"".toPrecision" prevents from rounding numbers
		document.getElementById('currentNumber').innerHTML=parseFloat(counter.toPrecision());
		return;
	}
}


function dot(number){

	if (aux===true || document.getElementById('currentNumber').innerHTML === '0') {
		document.getElementById('currentNumber').innerHTML=number;
		aux=false;
	return;

	}else{
  		document.getElementById('currentNumber').innerHTML+=number;
	}
}


function addNumber(number){
	historyNumbers = (document.getElementById('currentNumber').innerHTML).toString();
}


function addValue(value){
	if(memory!==0 || value==='-'){
		historyValues = value.toString();
	}else{
		return;
	}
}


function addToHistory(value){
	//Clear history data over 38 characters

	if(value==='='){
		fullValue='';
		document.getElementById('history').innerHTML=fullValue;
		return;
	}
	if (aux===false && r===0){
		fullValue = historyNumbers+' '+' '+historyValues+' ';
		document.getElementById('history').innerHTML=fullValue;
		r=1;
	}else{
		fullValue += historyNumbers+' '+' '+historyValues+' ';
		document.getElementById('history').innerHTML=fullValue;

	}

	if(fullValue.length>38){
		fullValue= fullValue.substring(1, 38);

	document.getElementById('history').innerHTML=fullValue;
	return;
	}
}


function mButtons(value){
	if(value==='mc'){
		mValue=0;
		mValueKeep=0;
		document.getElementById('currentNumber').innerHTML=0;
	}
	if(value==='ms'){
		mValue = document.getElementById('currentNumber').innerHTML;
		mValueKeep=parseFloat(mValue);
		document.getElementById('currentNumber').innerHTML=parseFloat(mValueKeep);
	}
	if(value==='m-'){
		mValue = document.getElementById('currentNumber').innerHTML;
		mValueKeep+=parseFloat(mValue)*(-1);
		document.getElementById('currentNumber').innerHTML=parseFloat(mValue);
	}
	if(value==='m+'){
		mValue = document.getElementById('currentNumber').innerHTML;
		mValueKeep+=parseFloat(mValue);
		document.getElementById('currentNumber').innerHTML=parseFloat(mValue);
	}
	if(value==='mr'){
		document.getElementById('currentNumber').innerHTML=mValueKeep;
		aux=true;
	}
}


function operations(value){
  let number = document.getElementById('currentNumber').innerHTML;
	let newValue = value;

	addValue(value);
	addNumber(number);

	if (value==='(-1)'){
		if(memory!==0){
			document.getElementById('currentNumber').innerHTML = (parseFloat(number))*(-1);
		}else{
			document.getElementById('currentNumber').innerHTML = (parseFloat(memory))*(-1);
		}
	}

	if (value==='sqrt'){
		if(memory!==0){
			document.getElementById('currentNumber').innerHTML = Math.sqrt(parseFloat(number));
		}else{
			document.getElementById('currentNumber').innerHTML = Math.sqrt(parseFloat(memory));
		}
	}

	if(value==='m+'||value==='m-'||value==='mc'||value==='mr'||value==='ms'){
		mButtons(value);
	}

	if (value==='1/x'){
		if(memory!==0){
			document.getElementById('currentNumber').innerHTML = 1/(parseFloat(number));
		}else{
			document.getElementById('currentNumber').innerHTML = 1/(parseFloat(memory));
		}
	}

	if(value==='percent'){
		let novonumber = document.getElementById('currentNumber').innerHTML = (parseFloat(number))/100;
		number = novonumber;
	}

	if (aux===false && memory!==0){
		value = oldValue;
		switch(value){
			case "+":
				document.getElementById('currentNumber').innerHTML = parseFloat(memory) + parseFloat(number);
				break;
			case "-":
				document.getElementById('currentNumber').innerHTML = parseFloat(memory) - parseFloat(number);
				break;
			case "*":
				document.getElementById('currentNumber').innerHTML = parseFloat(memory) * parseFloat(number);
				break;
			case "/":
				document.getElementById('currentNumber').innerHTML = parseFloat(memory) / parseFloat(number);
				break;
			case "=":
				result = document.getElementById('currentNumber').innerHTML;
				equals();
				break;
			case "^":
				document.getElementById('currentNumber').innerHTML = Math.pow(parseFloat(memory), parseFloat(number));
				break;
			case ",e+":
				document.getElementById('currentNumber').innerHTML = parseFloat(memory) * Math.pow(10, parseFloat(number));
				break;
			case "(-1)":
				document.getElementById('currentNumber').innerHTML = parseFloat(document.getElementById('currentNumber').innerHTML)*(-1);
				break;
		}
	}
	//`Prevents overflow`
	if(memory>999999999999999){
		document.getElementById('currentNumber').style.fontSize="1.4rem";
	}
	memory = (document.getElementById('currentNumber').innerHTML);
	oldValue = newValue;


	/*
	if(value!==oldValue){
		addValue(oldValue);
	}
	*/
	addToHistory(value);
	aux=true;
}


function backspace() {
	let number = document.getElementById('currentNumber').innerHTML;
    document.getElementById("currentNumber").innerHTML = number.substr(0, number.length - 1);

	if(document.getElementById("currentNumber").innerHTML==''){
		document.getElementById("currentNumber").innerHTML = 0;
	}
}


function c(){
	oldValue, result, fullValue, number, i, mValue, mValueKeep, r = 0;
	aux=false;
	document.getElementById('history').innerHTML='';
	document.getElementById('currentNumber').innerHTML=0;
}


function ce(){
	number = 0;
	document.getElementById('currentNumber').innerHTML = number;
}


function equals(){
  aux=false;
  document.getElementById('currentNumber').innerHTML=result;
}
