function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz.");
        } else if (i % 3 === 0) {
            console.log("Fizz.");
        } else if (i % 5 === 0) {
            console.log("Buzz.");
        } else {
            console.log(i);
        }
    }
}

function primeTime(n) {
    
    

    for (let i = n + 1; i < 20; i++) {
    
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                
                isPrime = false;
                break;
            } 
        }
    
        if (isPrime === true) {
            console.log(i);
            break;
        }
    }

}



FizzBuzz();
console.log('=================')
primeTime(4);

