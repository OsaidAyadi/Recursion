
// exe1
function sum (n) {

if (n===0){
return 0 ;}

return (  n + sum(n-1)  );


}

// exe2
function factorial (n) {

    if (n===1){
    return 1 ;}
    
    return (  n * factorial(n-1)  );
    
    
    }



// exe 3

function repeatStr(str,num) { 

    if(num === 0) {
    return "";
    
    }
    return ( str + " " + repeatStr(str,num-1))
    }
    

    // exe 4


function fibon (num) {

    if (num===0||num===1)
    return 1;

    return ( fibon(num-1) + fibon (num-2) );


}

// exe 5

function sum2 (num1,num2) {

    if (num1===num2) {
    return num2;

    }

    return (num1  + sum2(  (num1+1) , num2   ) );

    // 1 + 2 + 0

}

//  exe 6 

var num;
function repeatStr2(str,str2) { 

    num = str2.length;
    if(num === 0) {
    return "";
    
    }

    var soso = str2.substring(0, str2.length-1);
    return ( str + " " +repeatStr2(str,soso)   )
    }


