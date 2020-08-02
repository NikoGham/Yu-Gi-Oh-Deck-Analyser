function init() {
var myObj, myJSON, text, obj;

// deck list save
const save = document.getElementById("plsSave");
save.addEventListener("click", function(){

    function newObj(x, y, z, a) {
        this.name = x;
        this.nameMag = y;
        this.nameTrap = z; 
        this.nameMons = a;
    }
   
   let name = document.getElementById("deckName").value;
   let nameMag = document.getElementById("magName").value;
   let nameTrap = document.getElementById("trapName").value;
   let nameMons = document.getElementById("monsName").value;

  
   let hello = new newObj(name, nameMag, nameTrap, nameMons);

    myJSON = JSON.stringify(hello);
    localStorage.setItem("testJSON", myJSON);


alert("Saved!");
})

// deck list retrieval 
const ret = document.getElementById("plsRet");
ret.addEventListener("click", function(){

let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);

let deckName = name.name;
document.getElementById("demo").innerHTML = deckName;

let magNum = name.nameMag;
document.getElementById("magics").innerHTML = magNum;

let trapNum = name.nameTrap;
document.getElementById("traps").innerHTML = trapNum

let monsNum = name.nameMons;  

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

