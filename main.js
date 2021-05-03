var myArgs = process.argv.slice(2);
var output = '';
var i;
for(i=0; i<myArgs.length; i++){
    var num = myArgs[i];
    var numString = num.toString();
    var j;
    for(j=0; j<numString.length; j++){
	var digit = numString.substring(j,j+1);
	if(digit=='0'){
	    output = output+'Zero';
	}else if(digit=='1'){
	    output = output+'One';
	}else if(digit=='2'){
	    output = output+'Two';
	}else if(digit==='3'){
	    output = output+'Three';
	}else if(digit==='4'){
            output = output+'Four';
        }else if(digit==='5'){
            output = output+'Five';
        }else if(digit==='6'){
            output = output+'Six';
        }else if(digit==='7'){
            output = output+'Seven';
        }else if(digit==='8'){
            output = output+'Eight';
        }else if(digit==='9'){
            output = output+'Nine';
        }
    }
    output=output+',';
}
if(output.length>0){
    console.log(output.substring(0,output.length-1));
}
