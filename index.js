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

    




    const deck = {
        cards: 50, 
        monsters: 23,
        monsterNumber() {
            alert(`The deck has ${this.monsters} monsters`);
        },
        magics: 10,
        magicNumber() {
            alert(`The deck has ${this.magics} magics`);
        },
        traps: 7,
        trapsNumber() {
            alert(`The deck has ${this.traps} traps`);
        },
        fusions: 10
    };

}
document.addEventListener("DOMContentLoaded", init, false);