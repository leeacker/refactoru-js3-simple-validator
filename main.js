var phoneNumber = prompt('Please enter your phone number in the format xxx-xxx-xxxx\nNOTE:This will not be used for spam');
alert(phoneNumber.charAt(3)==='-' && phoneNumber.charAt(7)==='-' && phoneNumber.length === 12);

var birthDate = prompt('Please enter your birthday in the format xx/xx/xx');
alert(birthDate.charAt(2)==='/' && birthDate.charAt(5)==='/' && birthDate.length === 8);

var postalCode = prompt('Please enter your postal code in the format xxxxx or xxxxx-xxxx');
alert((postalCode.charAt(5) === '-' && postalCode.length === 10) || postalCode.length === 5);

var stateAbbrev = prompt('Please enter your state abbreviation (i.e. CO)');
alert(stateAbbrev.toUpperCase() === stateAbbrev && stateAbbrev.length === 2);

var maritalStatus = prompt('Are you married?');
var maritalStatus = maritalStatus.toLowerCase();
alert(maritalStatus === "yes" || maritalStatus === "no");