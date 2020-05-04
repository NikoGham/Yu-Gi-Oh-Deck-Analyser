function init() {

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Monsters";
    document.body.appendChild(btn);

    var list = document.getElementsByTagName("button")[0];

    list.id ="monsters";

    var mons = document.getElementById("monsters");

    mons.addEventListener("click", function(){
        alert(`${deck.monsters}`);
    });

    


    const deck = {
        cards: 50, 
        monsters: 23, 
        magics: 10, 
        traps: 7, 
        fusions: 10
    };

  

  

    
}
document.addEventListener("DOMContentLoaded", init, false);