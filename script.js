let  num1, num2, result, fName, lName, titleCaseFname, titleCaseLname, msgText;
function setValues() { 
	num1 = Number(document.getElementById("1").value);
	num2 = document.getElementById("2").value;
				
	fName = document.getElementById("first-name").value;
	lName = document.getElementById("last-name").value;
	titleCaseFname = titleCase(fName); 
	titleCaseLname = titleCase(lName); 
}	

function titleCase(name) {
	if (isNaN(name)) {
		name = name.toLowerCase(); 
		return name.replace(name[0], name[0].toUpperCase());
	}
	else {
		return name = "????"
	}
			
}

// Function to add 2 numbers
function sum(){
	setValues();
	if(isNaN(num1) || isNaN(num2)){                  //if output is not a  number
		alert("Please enter number in number fields")		
	}
	else{		
		result = num1 + num2;
		msgText = "Hello " + titleCaseFname + " " +  titleCaseLname + ", sum of " + num1 +" and " + num2 + " is: " + result; 
		document.getElementById("result").innerText = msgText;
	}
}
	   
// Function to substract 2 numbers
function minus(){
	setValues();
	if(isNaN(num1) || isNaN(num2)){       //if output is not a number
		alert("Please enter number in number fields")		
	}
	else{
		result = num1 - num2;
		msgText = "Hello " + titleCaseFname + " " +  titleCaseLname + ", substraction of " + num2  + "  from " + num1 + " is: " + result; 
		document.getElementById("result").innerText = msgText;
	}
}
 
// Function to divide numbers
function div(){
	setValues();
	if(isNaN(num1) || isNaN(num2)){                  //if output is not a  number
		alert("Please enter number in number fields")		
	}
	else{
		result = num1 / num2;
		msgText = "Hello " + titleCaseFname + " " +  titleCaseLname + ", division  of " + num1 +"  by " + num2 + " is: " + result;
		document.getElementById("result").innerText = msgText;
	}
}
		
// Function to amultiply numbers
function multi(){
	setValues();
	if(isNaN(num1) || isNaN(num2)){                  //if output is not a  number
		alert("Please enter number in number fields")		
	}
	else{
		result = num1 * num2;
		msgText = "Hello " + titleCaseFname + " " +  titleCaseLname + ", multiplication of " + num1 + "  and " + num2 + " is: " + result;
		document.getElementById("result").innerText = msgText;
		}
	}
		  
// // Function to get the remaider	
function modulus(){
	setValues();
	if(isNaN(num1) || isNaN(num2)){                  //if output is not a  number
		alert("Please enter number in number fields")		
	}
	else{
		result = num1 % num2;
		msgText = "Hello " + titleCaseFname + " " +  titleCaseLname + ", remainder of " + num1 + "  divided by " + num2 + " is: " + result;
		document.getElementById("result").innerText = msgText;
	}
}

function clearFields() { 
	document.getElementById("1").value = "";
	document.getElementById("2").value = "";

	document.getElementById("first-name").value = "";
	document.getElementById("last-name").value  = "";
	document.getElementById("result").innerText = "";
}	