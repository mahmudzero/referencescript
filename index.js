/*
 * Pointers:
 *	- have a value, which points to somewhere in memory
 *		- if the value is 0, i.e. pointing to NULL, then
 *		  dereferencing the pointer causes an error, since
 *		  you cannot deference memaddress 0
 *	- dereferencing means getting the value at the memaddress
 *	  of the pointer, i.e.
 *	  ```
 *	  int *x = 5; // the value of whats in memaddress defined by x = 5;
 *	  x;          // this is some arbitrary memaddress, 0x100;
 *	  *x;         // this is the value when dereferencing, 5;
 *	  ```
 */

function error_handling(message='Invalid Operation', error_code=1) {
	process.exitCode = error_code;
	console.log(message);
	console.log(`Process exited with code: ${error_code}`);
	process.exit();
}

Reference = function Reference(value) {
	if (new.target)  {
		error_handling(`Cannot invoke 'new' on Reference!`, 1);
	}
	if (value) {
		return { value: value }
	}
	delete this;
	return null;
}

drf = function drf(reference) {
	try {
		return reference.value;
	} catch(error) {
		error_handling(`[1] ${Math.round(Math.random() * 1e4)} segmentation fault ${process.argv[2]}`, 139);
	}
}
if (process.argv[2]) {
	require(process.argv[2]);
} else {
	process.exit();
}
