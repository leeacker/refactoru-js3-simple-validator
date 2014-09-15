var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};

var phoneNumber = prompt('Please enter your phone number in the format xxx-xxx-xxxx\nNOTE:This will not be used for spam');
if (phoneNumber.length !== 12) {
	console.log("length");
	alert(false);
}
else if(phoneNumber.charAt(3)!=='-' || phoneNumber.charAt(7)!=='-'){
	console.log("characters")
	alert(false);
}
else {
	var phoneNumber = phoneNumber.replace('-', 0);
	var phoneNumber = phoneNumber.replace('-', 0);
	console.log(phoneNumber);
	alert(isNumber(phoneNumber));
	
	}
	



var birthDate = prompt('Please enter your birthday in the format xx/xx/xx');

if(birthDate.length !== 8){
	console.log("lenth");
	alert(false);
}
else if(birthDate.charAt(2)!=='/' || birthDate.charAt(5)!=='/'){
	console.log("slashes");
	alert(false);
}
else {
	var birthDate = birthDate.replace('/', 0);
	var birthDate = birthDate.replace('/', 0);
	console.log(birthDate);
	alert(isNumber(birthDate));

	}
	


var postalCode = prompt('Please enter your postal code in the format xxxxx or xxxxx-xxxx');
if(postalCode.length !== 10  && postalCode.length !== 5){
	console.log("test 0");
	alert(false);
}
else if (postalCode.length === 5 && isNumber(postalCode)) {
	console.log("length is 5");
	alert(true);
}
else if (postalCode.charAt(5) !== '-'){
	console.log("no dash");
	alert(false);
}
else {
	postalCode = postalCode.replace('-', 0);
	console.log(postalCode);
	alert(isNumber(postalCode));
	}
	

var stateAbbrev = prompt('Please enter your state abbreviation (i.e. CO)');
alert(stateAbbrev.toUpperCase() === stateAbbrev && stateAbbrev.length === 2);

var maritalStatus = prompt('Are you married?');
var maritalStatus = maritalStatus.toLowerCase();
alert(maritalStatus === "yes" || maritalStatus === "no");