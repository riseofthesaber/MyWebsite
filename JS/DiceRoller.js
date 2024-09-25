
function rollDice(faces,DiceId,ModId,outputId,RollOutputId){

    let dice = parseInt(document.getElementById(DiceId).value);
    let modifier = parseInt(document.getElementById(ModId).value);
    console.log("Rolling");
    let rez = modifier;
    for(let i=0; i<dice; i++){
        rez += (Math.floor(Math.random() * faces) + 1);
    }
    let rollName= "";
    if (modifier==0){
        rollName= dice+"d"+faces;
    }else if(modifier<0) {
        rollName= dice+"d"+faces+modifier;
    }else{
        rollName= +dice+"d"+faces+"+"+modifier;
    }
    console.log("Rolled "+rollName +" and got "+rez);
    // output to whatever destination is indicated
    document.getElementById(outputId).innerHTML = rez;
    document.getElementById(RollOutputId).innerHTML = rollName;
}

function createListener(ElementId,DiceId,ModId,ResultId,RollNameId,faces){

    document.getElementById(ElementId).addEventListener("click", function() {
        rollDice(faces,DiceId,ModId,ResultId,RollNameId);
      });
}
