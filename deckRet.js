function init() {
var myObj, myJSON, text, obj;

// deck list save
const save = document.getElementById("plsSave");
save.addEventListener("click", function(){
   let name = document.getElementById("deckName").value;
   let nameMag = document.getElementById("magName").value;
   let nameTrap = document.getElementById("trapName").value;
   let nameMons = document.getElementById("monsName").value;


   myObj = {
       main: [
           {
       deckName: name,  
       magics: nameMag, 
       traps: nameTrap,
       monsters: nameMons
           }
         
        ]
           };
           /*
for (let i=0; i<myObj.main.length; i++ ) {
    if (name!==myObj.main[i]){
        name = myObj.main[i+1].deckName;
        nameMag = myObj.main[i+1].magics;
        nameTrap = myObj.main[i+1].traps;
        nameMons = myObj.main[i+1].monsters;
    } else {
        return alert("Already Entered!") ;
    }
    */
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);


alert("Saved!");
})

// deck list retrieval 
const ret = document.getElementById("plsRet");
ret.addEventListener("click", function(){

text = localStorage.getItem("testJSON");
obj = JSON.parse(text);

let deckName = obj.main[0].deckName;
document.getElementById("demo").innerHTML = deckName

let magNum = obj.main[0].magics;
document.getElementById("magics").innerHTML = magNum

let trapNum = obj.main[0].traps; 
document.getElementById("traps").innerHTML = trapNum

let monsNum = obj.main[0].monsters;  

document.getElementById("monsters").innerHTML = monsNum

let bigSum = 52;
document.getElementById("totals").innerHTML = bigSum;
// Factorial Calc 
var hello = function(num) {
    if (num < 0){
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * hello(num - 1));
    }
}

let magCalc_1 = (hello(magNum)/(hello(magNum-5)*hello(5)));
let magCalcBeta = (hello(bigSum)/(hello(bigSum-5)*hello(5)));

let magProp = magCalc_1/magCalcBeta;

let magFact = document.getElementById("magFact");
magFact.innerHTML = magProp;

});




// Storing data:


// Retrieving data:


}
document.addEventListener("DOMContentLoaded", init, false);

