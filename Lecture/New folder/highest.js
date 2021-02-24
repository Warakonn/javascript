function highestDigit(num)
{
    let num1 = num.toString().split('');
    let max = 0;
    for(var i=0;i<num;i++){
        
        if(max<num1[i]){
            max = num1[i];
        }
    }
    return max;
}
console.log (highestDigit(69));
console.log (highestDigit(112));
console.log (highestDigit(80));
