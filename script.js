// Part 1: Fizz Buzz
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


// Part 2: Prime Time
function primeTime(n) {


    
    for (let i = n + 1; ; i++) {

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

// Part 3: Feeling Loopy
function csvString() {
    let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

    let newData = data.split(",").join(" ");

    let test = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

    let newTest = test.split(",").join(" ");
    

    
    console.log(newData);
    console.log(newTest);
    
    
    // let newCell = data.replaceAll("\n", ",").split(",");
}



FizzBuzz();
console.log('=================');
primeTime(4);
console.log('=================');
csvString();


