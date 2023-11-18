//1.Display a number on the text field
function displayNumber(num){
    result.value+=num
}
//2.clear the text filed
function clearText(){
    result.value="" //it will assign an empty value to the text

}
//3.Evaluate the expresseion

function evaluateExpression(){
    // expn = result.value  //exp=7*8
    // output = eval(result.value);//56=7*8
    // result.value=output

    //or

    result.value = eval(result.value)
}

//4.Remove last charcter from the text field
function removeLastCharacter(){
    result.value = result.value.slice(0,-1)
}