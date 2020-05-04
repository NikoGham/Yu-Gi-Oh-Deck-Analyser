function init() {

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Monsters";
    document.body.appendChild(btn);
    // Don't have to go through this process to add ID but oh well // 
    var list = document.getElementsByTagName("button")[0];
    list.id ="monsters";
// to here // 
    var mons = document.getElementById("monsters");
// methods called with return - also using ES6 // 
    mons.addEventListener("click", function(){
        return deck.monsterNumber();
    });
    
// Magic Button // 

    var btn1 = document.createElement("BUTTON");
    btn1.innerHTML = "Magics";
    document.body.appendChild(btn1);
    btn1.id = "magics";
    var mag = document.getElementById("magics");
    mag.addEventListener("click", function() {
        return deck.magicNumber();
    });

// Trap Button // 

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


}
document.addEventListener("DOMContentLoaded", init, false);