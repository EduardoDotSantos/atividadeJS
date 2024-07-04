"use strict"




//atv 2 aprovado é maior q 60, recuperação entre 40 e 60,, reprovação menor q 60
var not1,not2,not3,not4,med
not1=parseFloat(prompt("Qual sua nota no 1ºbim?"));
not2=parseFloat(prompt("Qual sua nota no 2ºbim?"));
not3=parseFloat(prompt("Qual sua nota no 3ºbim?"));
not4=parseFloat(prompt("Qual sua nota no 4ºbim?"));
med=(not1 + not2 + not3 + not4)/4;
if(med >=60){
window.alert("Você foi aprovado.")
}
else if(med >=40){
window.alert("Você está de recuperação.")
}
else if(med <40){
    window.alert("Você está reprovado.")
}

