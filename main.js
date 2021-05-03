var myArgs = process.argv.slice(2);
var output = '';
var i;
for(i=0; i<myArgs.length; i++){
    var num = myArgs[i];
    var numString = num.toString();
    var j;
    for(j=0; j<numString.length; j++){
	console.log("made it into for loop2!!!");
	var digit = numString.substring(j,j+1);
	console.log(digit + ' wooo');
	if(digit=='0'){
	    output = output+'Zero';
	}else if(digit=='1'){
	    output = output+'One';
	}else if(digit=='2'){
	    output = output+'Two';
	}
    }
}
console.log(output);
