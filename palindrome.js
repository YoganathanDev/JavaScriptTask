/*
1. Get the strings or numbers from the user and store it in a variable1.
2. split the string.
3. Reverse the string.
4. join the string and store it in a variable2.
5. Now compare both the variable and check whether the give value is same
*/

function palindromeFN()
{
    let strValue=document.getElementById("inputText").value;
    //alert("Value is" +strValue);
    let reValue=strValue.split('').reverse().join('');
    //console.log(reValue);
    //document.write(ReverseString(reValue))
    if(strValue===reValue)
    {
        alert("It is a palindrome string")
    }else{
        alert("It is not a palindrome string")
    }

    /*
    let arrayValue=strValue.split('');
    let revArrayValue=arrayValue.reverse();
    let reString = revArrayValue.join('');
    if(strValue==reString)
    {
        alert("It is a palindrome string")
    }else{
        alert("It is not a palindrome string")
    }
    */
}

