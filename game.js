let usercount=0;
let comcount=0;


const choices= document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
// console.log(msg)

const user_result=document.querySelector("#userscore")
const computer_result=document.querySelector("#computerscore")

const genCompChoice =()=>{
    const option=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};

const draw = () =>{
    console.log("match was draw")
    msg.innerText="GAME DRAW"
    msg.style.backgroundColor ="aquamarine"

};

const showwin =(userWin,userChoice,compchoice)=>{
    if(userWin){
        usercount++
        user_result.innerText=usercount
        console.log("you win");
        msg.innerText=`YOU WIN your ${userChoice} beat ${compchoice}`
        msg.style.backgroundColor ="green"
    }else{
        comcount++
        computer_result.innerText=comcount
        console.log("you lose");
        msg.innerText=`YOU lose ${compchoice} beat your ${userChoice}`
        msg.style.backgroundColor ="red"
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
        showwin(userWin,userChoice,compchoice)
         
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