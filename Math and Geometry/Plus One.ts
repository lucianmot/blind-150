function plusOne(digits: number[]): number[] {
    if(digits[digits.length-1] === 9) {
        digits[digits.length-1] = 0;
        digits[digits.length-2]+=1;        
    }else{
        digits[digits.length-1]+=1;
    }
    return digits;
};
