function myfunction(data){
    // document.getElementsById('demo').innerHTML=data;
    document.getElementById("demo").innerHTML=data;

}

function myfunction2(num1 , num2){
        let sum= num1+num2;
        myfunction(sum)

}

myfunction2(2 ,2 );