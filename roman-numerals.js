function romanNumerals(num){
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    var romanNumber = "";

    for (f=0; f < roman.length; f++){
        while(num/decimal[f] >= 1){
            romanNumber += roman[f];
            num -= decimal[f];
        }
    }
    return romanNumber;
}

function romanToDecimal(num){

    var roman =   ["CM", "CD", "XC", "XL", "IX", "IV", "M", "D", "C", "L", "X", "V", "I"];
    var decimal = [900, 400, 90, 40, 9, 4, 1000, 500, 100, 50, 10, 5, 1];
    var romanNumber = 0;

    for (f=0; f < roman.length; f++){
        var pos = num.indexOf(roman[f]);

        while (pos !== -1) {
            romanNumber += decimal[f];


            num = num.substr(0,pos)+num.substr(pos + roman[f].length)
            pos = num.indexOf(roman[f]);

        }

    }
    return romanNumber;
}

function getNumber(event){  
    if (!(event.keyCode == 13 || event.type == "click")){return};

    var sub = document.getElementById("submit");
    var data = document.getElementById("data");
    var inp = document.getElementById("number");

    if (inp.value == ""){return};

    if (isNaN(inp.value)){

        inp.value = inp.value.toUpperCase();


        var testChar = "";
        var newInp = "";
        
        for(f=0;f < inp.value.length;f++){
            testChar = inp.value.charAt(f);
            
//strip out any characters that are not Roman.
            
            switch(testChar){
                case "M":
                case "D":
                case "C":
                case "L":
                case "X":
                case "V":
                case "I":
                    newInp += testChar;

                           }
        }
        
        inp.value = newInp;
        if (inp.value == ""){return};
        var rn = romanToDecimal(inp.value);


    } else {
        if (inp.value.length > 4){
            // limit decimal numbers to 9999 to prevent large 
            // roman numeral string
            inp.value = inp.value.substr(0,4);
        }

        var rn = romanNumerals(inp.value);
    }
    data.innerHTML = inp.value +" = "+rn;
    
    data.classList.remove('animated','tada');
    setTimeout(function(){
          data.classList.add('animated','tada');
    },20);
  

    inp.value = "";
}

