let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let winner=document.querySelector(".winner");
let newgame=document.querySelector(".newgame");
let hide=document.querySelector(".hide");

let count = 0;

let turn0=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
            count++;
        if(turn0){
            box.innerText="O";
            turn0=false;
        
        }
       else{
        box.innerText="X";
        turn0=true;
        
       }
       box.disabled=true;
       win();

        

       

        
        

      
       
    })

});




const enablebox=()=>{
    for(let box of boxes){
      box.disabled=false;
    }
}
const disablebox=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
}

const gamedraw=()=>{
    winner.innerText="DRAW!!";
    disablebox();


}

const rgame=()=>{
    enablebox();
    for(let box of boxes){
       
        box.innerText="";
       

    }
    hide.classList.add("hide");
    win();

}
const ngame=()=>{
    enablebox();
    for(let box of boxes){
        
        box.innerText="";
        

    }
    hide.classList.add("hide");
    win();

}

const showwinner=(win)=>{
    winner.innerText=`Congratulations,the winner is ${win}`;
    hide.classList.remove("hide");
     disablebox();
}
    
  
    
    
        const win =()=>{
            for(let pattern of winpattern){
               
        
                let pos1=boxes[pattern[0]].innerText;
                let pos2=boxes[pattern[1]].innerText;
                let pos3=boxes[pattern[2]].innerText;
               
                if(pos1 !=="" && pos2 !=="" && pos3  !=="")
                    if((pos1 ===  pos2 ) && (pos2=== pos3)){
                        console.log("WINNER!!");
                  
                        showwinner(pos1);
                        disablebox();

                    }
                }
                
        
            }
        
        newgame.addEventListener("click",ngame);
        resetbtn.addEventListener("click",rgame);    
        
        
        
        
        
        
    
   



