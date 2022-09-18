// Prime Number only divided by it self...

// !lets check 42 is prime number or not.


const primeNumber = (primeValue) => {
    for (i = 2; i < primeValue; i++) {


        if (primeValue % i === 0) {
            return "not a Prime Number!";
        }

        else {
            return "It's a Prime Number!";
        }
    }
}


console.log(
    primeNumber(5));