const words = ["rock", "paper", "scissor"];
    let computerInp = words[Math.floor(
    Math.random()*(
        (words.length))
    )];
let userInp = prompt(`choose any word from:  ${words} :`);
if(
    (computerInp == "rock" && userInp == "scissor")||
     (computerInp == "paper" && userInp == "rock")||
     (computerInp == "seissor" && userInp == "paper")
){
    let p1 = document.createElement("p");
    p1.innerHTML = ("Alas! You Lost the match.");
    document.body.querySelector("div").appendChild(p1);
}
else if(
    (computerInp == "scissor" && userInp == "rock")||
     (computerInp == "rock" && userInp == "paper")||
     (computerInp == "paper" && userInp == "scissor")
){
    let p1 = document.createElement("p");
    p1.innerHTML = ("Hurrah! You won the match.");
    document.body.querySelector("div").appendChild(p1);
}
else if(
    (computerInp == "rock" && userInp == "rock")||
     (computerInp == "paper" && userInp == "paper")||
     (computerInp == "scissor" && userInp == "scissor")
){
    let p1 = document.createElement("p");
    p1.innerHTML = ("It's a tie.");
    document.body.querySelector("div").appendChild(p1);
}
else{
    let p1 = document.createElement("p");
    p1.innerHTML = ("something gone wrong.");
    document.body.querySelector("div").appendChild(p1);
}
let p2 = document.createElement("p");
    p2.innerHTML = (`You entered: ${userInp};  \ncomputer generated word: ${computerInp}`);
    document.body.querySelector("div").appendChild(p2);
let parentDiv = document.querySelector("div");
parentDiv.className = "flexDiv";
