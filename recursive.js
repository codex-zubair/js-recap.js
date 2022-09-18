// ! Recursive problem facing...s
let recursive = (value)=>{
    if(value === 0)
    {
        return value; 
    
    }

    recursive(value - 1);
}
console.log(recursive(2));







function countDownFrom(number) {
	if (number === 0) {
		return;
	}

    console.log(number);    
    countDownFrom(number - 1);
}


countDownFrom(5);