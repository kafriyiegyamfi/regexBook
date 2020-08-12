// Regex quick reference

/*******************************************************************************
	[abc]     A single character: a, b or c
	[^abc]     Any single character but a, b, or c
	[a-z]     Any single character in the range a-z
	[a-zA-Z]     Any single character in the range a-z or A-Z
	^     Start of line
	$     End of line
	\A     Start of string
	\z     End of string
	.     Any single character
	\s     Any whitespace character
	\S     Any non-whitespace character
	\d     Any digit
	\D     Any non-digit
	\w     Any word character (letter, number, underscore)
	\W     Any non-word character
	\b     Any word boundary character
	(...)     Capture everything enclosed
	(a|b)     a or b
	a?     Zero or one of a
	a*     Zero or more of a
	a+     One or more of a
	a{3}     Exactly 3 of a
	a{3,}     3 or more of a
	a{3,6}     Between 3 and 6 of a
	^\+?\d.\s? // +1 or +44  ^\+?(\233?|0)
	\(?\d{3}\)? // first part
	 
	[-.\s]? // possible spacing / sep
	 
	\d{3} // 2nd part
	 
	[-.\s]? // possible spacing / sep
	 
	\d{4}? // 3rd part
********************************************************************************/

//Fullname regex
//$pattern= /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

//email patern
//$pattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Regular expression to validate Passwords
 */ 

//Exactly 8 Character Password with lowercase letters
// $pattern = /^[a-z]{8}$/;

//Minimum 8 and Maximum 10 Character Password with lowercase letters
// $pattern =/^[a-z]{8,10}$/;

//Minimum 8 Character Password with lowercase letters
// $pattern =/^[a-z]{8,}$/;

//Minimum 8 and Maximum 10 Character Password with lowercase or uppercase letters
//// $pattern =/^[a-zA-Z]{8,}$/;


/**
 * Regular expression to validate ghana phone numbers
 */

// simple pattern
//$pattern = '/^[0-9\-\(\)\/\+\s]*$/';

//$pattern = '/^\(?[2-9][0-8][0-9]\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/';

// + 233 xx xxx xxx or 0 xx xxx xxxx or xx xxx xxxx
//$pattern = '/^\+?\(?(([2][3][3])|[0])?\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$/'; 


//0 xx xxx xxxx or xx xxx xxxx
//$pattern = '/^\(?[0]?\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$/';


//233xxxxxxxx
//$pattern = '/^[2][3][3]\d{9}$/';

//0xxxxxxxxx or xxxxxxxxx
// $pattern = '/^[0]?\d{9}$/';

//MTN MSISDN 23324,23354,23355, [2,5] [4,5] 
//$pattern = '/^(([2][3][3])|[0])?([2]|[5])([4]|[5])\d{7}$/';

//vodafone MSISDN 23320,23350, [2,5] [0] 
//$pattern = '/^(([2][3][3])|[0])?([2]|[5])([0])\d{7}$/';

//Airtel 23326,23356, [2,5] [6]  
//$pattern = '/^(([2][3][3])|[0])?([2]|[5])([6])\d{7}$/';

//Tigo 23327,23357, [2,5] [7] 
//$pattern = '/^(([2][3][3])|[0])?([2]|[5])([7])\d{7}$/';

//Glo 23323, [2] [3]
//$pattern = '/^(([2][3][3])|[0])?([2][3])\d{7}$/';

//Kasapa 23328  [2] [8]
//$pattern = '/^(([2][3][3])|[0])?([2][8])\d{7}$/';

 //strictly 233xxxxxxxx or 0xxxxxxxxx or xxxxxxxxx
// $pattern = '/^(([2][3][3])|[0])?\d{9}$/';

// example phone numbers
// $phoneNumbers = 
// 024 774 9488
// 024-774-9488
// 0247-749-488
// 233 24 123 1234
// 233241231234
// +233 24 123 1234
// (233) 24 123 1234
// 0540105690
// 540105698 

