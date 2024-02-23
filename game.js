let usercount=0;
let comcount=0;


let choices= document.querySelectorAll(".choice")

const genCompChoice =()=>{
    const option=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};

const draw = () =>{
    console.log("match was draw")
};

const showwin =(userWin)=>{
    if(userWin){
        console.log("you win")
    }else{
        console.log("you loss")
    }

}

const playGame=(userChoice) =>{
    console.log("userchoice=" , userChoice)
    const compchoice=genCompChoice();
    console.log("computer=",compchoice)

    if(userChoice === compchoice){

        draw();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compchoice==="paper" ? false : true
        }else if(userChoice ==="paper"){
           userWin= compchoice=="scissors" ? true : false
        }else{
           userWin= compchoice=== "rock" ? false : true
        }
        showwin(userWin)
         
    }

}
choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id")
        // console.log("clicked",userChoice )
        playGame(userChoice)
    })
})