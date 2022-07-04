
let fahrenheit;
let celsius;
let kelvin;
let rankine;



//Retrives Fahrenheit and converts to other values

function funcFah() {

      fahrenheit = parseInt(document.getElementById('fahrenheit').value);
      let fToC = (fahrenheit - 32) * 5/9;
      let fToK = (fahrenheit - 32) * 5/9 + 273.15;
      let fToR = fahrenheit + 459.67;

      document.getElementById('celsius').value = fToC.toFixed(2);
      document.getElementById('kelvin').value = fToK.toFixed(2);
      document.getElementById("rankine").value = fToR.toFixed(2);

}

//Retrives celsius and converts to other values

function funcCel() {
    celsius = parseInt(document.getElementById('celsius').value);
    let CToF = (celsius * 9/5) + 32;
    let CToK = (celsius + 273.15)
    let CToR = (celsius * (9/5) + 491.67);

    document.getElementById('fahrenheit').value = CToF.toFixed(2);
    document.getElementById('kelvin').value = CToK.toFixed(2);
    document.getElementById("rankine").value = CToR.toFixed(2);

}

//retrives kelvin and converts to other values

function funcKel() {
    kelvin = parseInt(document.getElementById('kelvin').value);
    let KToF = (kelvin - 273.15) * 9/5 + 32;
    let KToC = (kelvin - 273.15)
    let KToR = (kelvin * 1.8);

    document.getElementById('fahrenheit').value = KToF.toFixed(2);
    document.getElementById('celsius').value = KToC.toFixed(2);
    document.getElementById("rankine").value = KToR.toFixed(2);

}


//retrives rankine and converts to other values

function funcRan() {
    rankine = parseInt(document.getElementById('rankine').value);
    let RToF = (rankine - 459.67);
    let RToK = (rankine * 5/9)
    let RToC = (rankine - 491.67) * 5/9;

    document.getElementById('fahrenheit').value = RToF.toFixed(2);
    document.getElementById('kelvin').value = RToK.toFixed(2);
    document.getElementById("celsius").value = RToC.toFixed(2);

}


function reset() {
    document.getElementById('fahrenheit').value = "";
    document.getElementById('kelvin').value = "";
    document.getElementById("celsius").value = "";
    document.getElementById("rankine").value = "";

}






     
   


    

