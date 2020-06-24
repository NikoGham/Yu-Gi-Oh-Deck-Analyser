function init() {

    const deck = {
        cards: 50, 
        monsters: [],
        monsterNumber() {
            alert(`The deck has ${this.monsters} monsters`);
        },
        magics: [],
        magicNumber() {
            alert(`The deck has ${this.magics} magics`);
        },
        traps: [],
        trapsNumber() {
            alert(`The deck has ${this.traps} traps`);
        },
        fusions: 10
    };


    var newDiv = document.createElement("DIV");
    newDiv.id = "trapBrickInfo";
    document.body.appendChild(newDiv);

    var trapAnalExp = document.createElement("P");
    trapAnalExp.id = "trapInfo";
    document.getElementById("trapBrickInfo").appendChild(trapAnalExp);
    trapAnalExp.innerText = "Click here to find your chance of drawing a full hand of traps on your first turn you fiend.";

    var calculate = document.createElement("BUTTON");
    document.getElementById("trapBrickInfo").appendChild(calculate);
    calculate.innerText = "calculate";
    const trapCalc = function() {
        hello();
    }
    document.getElementsByTagName("BUTTON")[0].addEventListener("click", trapCalc);


    


// Monsters No. Button // 
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Monsters";
    document.body.appendChild(btn);
// Don't have to go through this process to add ID but oh well - that's interesting that when I added the above button , the monsters button lost it's click event to Calculate. I would believe that is because its position in the script came before this button and so became the new list assignment. // 
// var list = document.getElementsByTagName("button")[0];
// list.id ="monsters";
    btn.id = "monsters";

// to here // 
    var mons = document.getElementById("monsters");
// methods called with return - also using ES6 // 
    mons.addEventListener("click", function(){
        return deck.monsterNumber();
    });
    
// Magics No. Button // 

    var btn1 = document.createElement("BUTTON");
    btn1.innerHTML = "Magics";
    document.body.appendChild(btn1);
    btn1.id = "magics";
    var mag = document.getElementById("magics");
    mag.addEventListener("click", function() {
        return deck.magicNumber();
    });

// Trap No. Button // 

    var btn2 = document.createElement("BUTTON");
    btn2.innerHTML = "Traps";
    document.body.appendChild(btn2);
    btn2.id = "traps";
    var tra = document.getElementById("traps");
    tra.addEventListener("click", function(){
        return deck.trapsNumber();
    })

// Monster Input // 
    const inp = document.createElement("INPUT");
// well this is handy... // 
    inp.setAttribute("type", "number");
    inp.id = "monsterspace";
    var x = document.getElementById("inp");
    x.appendChild(inp);

    const monsinp = document.createElement("BUTTON");
    monsinp.innerText = "Enter Monsters No.";
    x.appendChild(monsinp);
   
    monsinp.addEventListener("click", function() {
        alert("done");
        let y = document.getElementById("monsterspace").value;
        return deck.monsters = y;
    });
    
// Magic Input //
    const inpmag = document.createElement("input");
    inpmag.setAttribute("type", "number");
    inpmag.id = "magicspace"; 
    x.insertAdjacentElement("afterend", inpmag);
// Magic Input Button // 
    const magBtn = document.createElement("Button");
    magBtn.innerText = "Enter Magics No.";
    inpmag.insertAdjacentElement("afterend", magBtn);
// Magic Event // 
    magBtn.addEventListener("click", function() {
        alert("magics entered - thank you");
        let y = document.getElementById("magicspace").value;
        return deck.magics = y;
    });

// Trap Input // 
    const inptrap = document.createElement("INPUT");
    inptrap.setAttribute("type", "number"); 
    inptrap.id = "trapspace";
    x.insertAdjacentElement("beforebegin", inptrap)
// Trap Input Button // 
    const traBtn = document.createElement("BUTTON");
    traBtn.innerText = "Enter Trap No. "; 
    inptrap.insertAdjacentElement("afterend", traBtn);
// Trap Event // 
    traBtn.addEventListener("click", function(){
        alert("Traps entered");
        let y = document.getElementById("trapspace").value;
        return deck.traps = y;
    })



    var hello = function(num) {
        if (num < 0){
            return -1;
        } else if (num == 0) {
            return 1;
        } else {
            return (num * hello(num - 1));
        }

    }

    let trapTime = deck.traps;
    console.log(trapTime);

    document.getElementById("factResult").innerHTML = hello(trapTime);



  

}
document.addEventListener("DOMContentLoaded", init, false);