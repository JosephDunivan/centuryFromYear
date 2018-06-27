# centuryFromYear
Takes a value(year) and returns the century.
Works for all years with a value greater than 1.

## Solution 1 in JavaScript

First, we determine if the value is an integer when divided by 100.
```javascript
  if(Number.isInteger(year/100) == true) {
    ...
  }
```
Why is this non trivial? A new century starts the first year after the last century, ie. 2001 is in the 21 century, while 2000 is in the 20th century.

If it is, then we set a variable, in this case called result, equal to the year divided by 100.
```javascript
  if (Number.isInteger(year/100) == true) {
	  result = (year/100);
  }
  ...
  }
```
Else, if if the value divided by 100 is not equal to an integer, set result equal to the floored value after it has been divided by 100 and then add 1.
```javascript
  if (Number.isInteger(year/100) == true) {
	  result = (year/100);
  }
  else {
	  result = (Math.floor(year/100)+1);
  }
  ...
  }
```
Then all we have to do is return the result.
```javascript
function centuryFromYear(year) {
  if (Number.isInteger(year/100) == true) {
	  result = (year/100);
  }
  else {
	  result = (Math.floor(year/100)+1);
  }
  return result;
  }
}
```
## Solution 2

This solution checks the remainder of the value after it is divided by 100. If there is no remainder, the value divided by 100 is returned.
If there is a remainder, the value divided by 100 is parsed to an integer and 1 is added. 
```javascript
function centuryFromYear(year) {
    if(year%100==0){
        return parseInt(year/100);
    }else{
        return parseInt(year/100)+1;    
    }    
}
```
