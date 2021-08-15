let oldColor='pink';

function changeClass(value){
	document.getElementById('container-color').classList.remove('container-'+oldColor);
	document.getElementById('container-color').classList.add('container-'+value);

	document.getElementById('table-color').classList.remove('table-'+oldColor);
	document.getElementById('table-color').classList.add('table-'+value);

	document.getElementById('thead-color').classList.remove('thead-'+oldColor);
	document.getElementById('thead-color').classList.add('thead-'+value);
}


function changeColor(value){
  switch(value){
		case "pink":
		changeClass(value);
			break;
		case "green":
    	changeClass(value);
			break;
		case "blue":
			changeClass(value);
			break;
	}
	oldColor=value;
}
