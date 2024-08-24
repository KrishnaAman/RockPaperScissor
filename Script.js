let US = 0;
let cs =0;

const choices = document.querySelectorAll(".choice");

const gamec = ()=>{
    const options = ["rock","paper","scissors"]
    const ri = Math.floor(Math.random()*3);
    return options[ri];
}
const dg =()=>{
    console.log("draw game");
    document.getElementById('msg').textContent="It's a draw";
}
const uw =()=>{
    console.log("you win");
    document.getElementById('msg').textContent="you win!!";
}
const cw = ()=>{
    console.log("computer win");
    document.getElementById('msg').textContent="computer win";
}
const winner = (UserWin)=>{
    if(UserWin){
        US++;
        document.getElementById('us').textContent = US;
    }
    else{
        cs++;
        document.getElementById('cs').textContent = cs;
    }
    }

const game = (uc)=>{
    console.log("user choice =",uc);
    const cc = gamec();
    console.log("computer choice =",cc);
    let UserWin = true;
    if(uc===cc){
        dg();

    }
   
    
    else if((uc=="rock"&&cc=="scissors")||(uc=="scissors"&&cc=="paper")||(uc=="paper"&&cc=="rock")){
    uw();
    winner(true);
   }
   else{
    cw();
    winner(false);
   }
}



choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const uc = choice.getAttribute("id")
        game(uc)

    })
})