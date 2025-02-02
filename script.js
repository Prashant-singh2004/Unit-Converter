let feet = document.getElementById("feet");
let meter = document.getElementById("meter");
let inch = document.getElementById("inches");
let cm = document.getElementById("cm");
let yard = document.getElementById("yards");
let km = document.getElementById("km");
let mile = document.getElementById("miles");

let celsius = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");

let kg = document.getElementById("kg");
let gm = document.getElementById("gm");
let mt = document.getElementById("mt");
let lb = document.getElementById("lb");
let oz = document.getElementById("oz");

let s = document.getElementById("s");
let ms = document.getElementById("ms");
let min = document.getElementById("min");
let hr = document.getElementById("hr");
let d = document.getElementById("d");
let w = document.getElementById("w");

var daysInCurrentMonth=new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()

function feetToOther(val){
    meter.value =  val/3.2808; 
    inch.value =  val*12;   
    cm.value    =  val/0.032808; 
    yard.value  =  val*0.33333;  
    km.value    =  val/3280.8; 
    mile.value  =  val*0.00018939;       
}
function meterToOther(val){
    feet.value = val*3.2808;
    inch.value = val*39.370;  
    cm.value   = val/0.01;
    yard.value = val*1.0936; 
    km.value   = val/1000;
    mile.value = val*0.00062137;
}
function inchesToOther(val){
    feet.value = val*0.083333;
    meter.value = val/39.370;  
    cm.value = val/0.39370;
    yard.value = val*0.027778; 
    km.value = val/39370;
    mile.value = val*0.000015783;
}
function cmToOther(val){
    feet.value = val*0.032808;
    meter.value = val/100;  
    inch.value = val*0.39370;
    yard.value = val*0.010936; 
    km.value = val/100000 ;
    mile.value = val*0.0000062137;
}
function yardsToOther(val){
    feet.value = val*3;
    inch.value = val*36;  
    cm.value = val/0.010936;
    meter.value = val/1.0936; 
    km.value = val/1093.6;
    mile.value = val*0.00056818;
}
function kmToOther(val){
    feet.value = val*3280.8;
    inch.value = val*39370;  
    cm.value = val*100000;
    yard.value = val*1093.6; 
    meter.value = val*1000;
    mile.value = val*0.62137;
}
function milesToOther(val){
    feet.value = val*5280;
    inch.value = val*63360;  
    cm.value = val/0.0000062137;
    yard.value = val*1760; 
    km.value = val/0.62137;
    meter.value = val/0.00062137;
}

// *********************//

function celsiusToOther(val){
    kelvin.value =  val+273.15; 
    fahrenheit.value =  (val*1.8)+32;   
}

function kelvinToOther(val){
    celsius.value =  val-273.15; 
    fahrenheit.value =  ((val-273.15)*1.8)+32;   
}

function fahrenheitToOther(val){
    celsius.value =  (val-32)/1.8;
    kelvin.value =  ((val-32)/1.8)+273.15;   
}

// *********************//

function kgToOther(val){
    gm.value = val*1000;
    mt.value = val/1000;  
    lb.value = val*2.205;
    oz.value = val*35.274; 
}

function gmToOther(val){
    kg.value = val/1000;
    mt.value = val/(1e+6);  
    lb.value = val/453.59;
    oz.value = val/28.35; 
}

function mtToOther(val){
    kg.value = val*1000;
    gm.value = val/(1e+6);  
    lb.value = val*2205;
    oz.value = val*35274; 
}

function lbToOther(val){
    kg.value = val/2.205;
    gm.value = val/0.002205;  
    mt.value = val/2205;
    oz.value = val*16; 
}

function ozToOther(val){
    kg.value = val/35.274;
    gm.value = val/0.035274;  
    mt.value = val/35274;
    lb.value = val/16; 
}

// *********************//

function sToOther(val){
    ms.value = val*1000;
    min.value = val/60;
    hr.value = val/3600;  
    d.value = val/86400;
    w.value = val/604800; 
}

function msToOther(val){
    s.value = val/1000;
    min.value = val/60000;
    hr.value = val/3600000;  
    d.value = val/86400000;
    w.value = val/604800000; 
}

function minToOther(val){
    s.value = val*60;
    ms.value = val*60000;
    hr.value = val/60;  
    d.value = val/1440;
    w.value = val/10080; 
}

function hrToOther(val){
    s.value = val*3600;
    ms.value = val*3600000;
    min.value = val*60;  
    d.value = val/24;
    w.value = val/168; 
}

function dToOther(val){
    s.value = val*86400;
    ms.value = val*86400000;
    min.value = val*1440;  
    hr.value = val*24;
    w.value = val/7;
}

function wToOther(val){
    s.value = val*604800;
    ms.value = val*604800000;
    min.value = val*10080;  
    hr.value = val*168;
    d.value = val*7;
}


function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "feet" : feetToOther (parseFloat(value)); break;
        case "meter": meterToOther(parseFloat(value)); break;
        case "inch" : inchesToOther(parseFloat(value)); break;
        case "cm"   : cmToOther(parseFloat(value)); break;
        case "yard" : yardsToOther (parseFloat(value)); break;
        case "km"   : kmToOther (parseFloat(value)); break;
        case "mile" : milesToOther(parseFloat(value)); break;
        case "celsius" : celsiusToOther(parseFloat(value)); break;
        case "kelvin" : kelvinToOther(parseFloat(value)); break;
        case "fahrenheit" : fahrenheitToOther(parseFloat(value)); break;
        case "kg" : kgToOther(parseFloat(value)); break;
        case "gm" : gmToOther(parseFloat(value)); break;
        case "mt" : mtToOther(parseFloat(value)); break;
        case "lb" : lbToOther(parseFloat(value)); break;
        case "oz" : ozToOther(parseFloat(value)); break;
        case "s" : sToOther(parseFloat(value)); break;
        case "ms" : msToOther(parseFloat(value)); break;
        case "min" : minToOther(parseFloat(value)); break;
        case "hr" : hrToOther(parseFloat(value)); break;
        case "d" : dToOther(parseFloat(value)); break;
        case "w" : wToOther(parseFloat(value)); break;
    }
}





