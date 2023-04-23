const swapDigits = (number)=>{
    let swappedNumber = 0
    let count= 0
    //write logic here
    let countNumber= number;
    while(countNumber >=1){
        countNumber = countNumber/10;
        count += 1;
    }

    if (count%2 == 0) {
        for (let i = 2; i <= count; i += 2) {
            wd = Math.floor((number % (10**i))/(10**(i-2)))
            wd = (wd%10) * 10 + Math.floor(wd/10);
            swappedNumber += (wd/100) * (10**i);
        }
    } else {
        for (let i = 2; i <= count-1; i += 2) {
            wd = Math.floor((number % (10**i))/(10**(i-2)));
            wd = (wd%10) * 10 + Math.floor(wd/10);
            swappedNumber += (wd/100) * (10**i);
        }
        swappedNumber +=Math.floor(number/(10**(count-1)))*(10**(count-1))
    }

    // console.log(swappedNumber);
    return swappedNumber;
    
}
// swapDigits(1234236);
module.exports = swapDigits
