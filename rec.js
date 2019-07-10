
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


    // exe 7

    function  multiOf (num1,num2,num3) {
        if (num3===0){
            return num1;
        }



        return  ( num2* multiOf (num1,num2,num3-1) );
    }

    //   exe 8


    function  muti2 (num1,num2) {
        if (num1===num2){
            return num1;
        }

        return num1* muti2 (num1+1,num2);

    }

    // exe 9 

    function  numberBetweenUs (num1,num2) {

        if (num1===num2-1){
        return "";
    }

            if (num1 === num2-2 ){
         return (num1+1)  +  ""  +  numberBetweenUs (num1+1,num2) ;
        }
        else{
        return (num1+1)  +  ", "  +  numberBetweenUs (num1+1,num2) ;}

//  2, 3, 

    }



//  exe 10


function countDown (num) {

    if (num===0)
    return "done"

    return (num + ", " + countDown(num-1)  )

}


//  exe 11
function multiplication2 (num1,num2) {
 if (num2===0)
 {return 0;}
 


 return num1+ multiplication2 (num1,num2-1);

}


//  exe 11-b

function mod2 (num1,num2) {


    if (num1 < num2)
    return num1 ;


    return mod2(num1-num2 , num2 );

}

// exe 12 

function mirror (str) {



    if (str.length===0)
    {

        return "";
    }

    var res = str.slice(0, -1);


 return (str[res.length]+ "" + mirror(res)  )


}

// 13

function m2 (str) {
     
    if (str.length===0)
    {

        return "";
    }

    var res = str.slice(0, -1);

var control = str[res.length];

    if (control===control.toUpperCase()){

        control= control.toLowerCase();
}
else
{
    control=  control.toUpperCase();

}


 return (control+ "" + m2(res)  )


}

//  ex 14


function repeatChar (str1 , char) {

    if (str1.length==0)
    return sum;

  
    if (char === str1[str1.length-1]){
        
    }

    str1 = str1.slice(0,-1);

    return repeatChar ( str1,char );

}