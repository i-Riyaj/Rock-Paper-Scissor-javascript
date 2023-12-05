const rpsGame = () =>{
    const words = ["rock", "paper", "scissor"];

    const compInp = words[Math.floor((Math.random()*(words.length)))];
    
    
    const userInput = document.querySelector("#userInput");
    const btn1 =document.querySelector("#btn1");

    const comp_Gen_Word = document.querySelector("#compGenWord");
    const user_Entered_Word = document.querySelector("#userEnteredWord");
    
    const userInp = userInput.value;
    const result = document.querySelector("#resultText");

    if(
        (compInp == "rock" && userInp == "scissor")||
        (compInp == "paper" && userInp == "rock")||
        (compInp == "seissor" && userInp == "paper")
    ){
        result.innerHTML = "Sorry!You Lost the round.";
        comp_Gen_Word.innerHTML = `Random generated word was : ${compInp}.`;
        user_Entered_Word.innerHTML =`Your Entered: ${userInp}.`;
        }
        else if(
        (compInp == "scissor" && userInp == "rock")||
        (compInp == "rock" && userInp == "paper")||
        (compInp == "paper" && userInp == "scissor")
    ){
        result.innerHTML = "Hurrah!You won the round.";
        comp_Gen_Word.innerHTML = `Random generated word was : ${compInp}.`;
        user_Entered_Word.innerHTML =`Your Entered: ${userInp}.`;
    }
    else if(
        (compInp == "rock" && userInp == "rock")||
        (compInp == "paper" && userInp == "paper")||
        (compInp == "scissor" && userInp == "scissor")
    ){
        result.innerHTML = "It's a tie.";
        comp_Gen_Word.innerHTML = `Random generated word was : ${compInp}.`;
        user_Entered_Word.innerHTML =`Your Entered: ${userInp}.`;
    }
    else{
        result.innerHTML = "Something Wrong.";
    }
    const output = document.querySelector(".outputSection");
    output.className = "resultArea";     
}
btn1.addEventListener('click',rpsGame); 


