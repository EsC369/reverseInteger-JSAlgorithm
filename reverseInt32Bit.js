let reverse = (nums) => {
    // change the integers to a string and split into array:
    let intString = nums.toString().split('')
    let num;
    // check if first element is a negative:
    if(intString[0] == '-') {
        // if it is negative, then remove it from the front of the array:
        // We as well, store the number in a variable c
        let c = intString.shift()
        num = parseInt(c +intString.reverse().join(''))
    } else {
       num = parseInt(intString.reverse().join(''))
    }
    
    if(Math.abs(num) > Math.pow(2, 31)) {
        num = 0;
    }
    
    return num
};

let numbers = 12354;

// reverse(numbers)
console.log(reverse(numbers));