"use strict"

var not1,not2,not3,med
not1=parseFloat(prompt("Qual sua nota no 1ºbim?"));
not2=parseFloat(prompt("Qual sua nota no 2ºbim?"));
not3=parseFloat(prompt("Qual sua nota no 3ºbim?"));
med=(not1 + not2 + not3)/3;
if(med >=60){
window.alert("Você foi aprovado.")
}
else if(med <40){
    window.alert("Você está reprovado.")
}
