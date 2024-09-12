const label = document.querySelector("label");
const input = document.querySelector("label input");
const container = document.querySelector("label #container");
const toggle = document.querySelector("label #toggle");


label.addEventListener("click",()=>{
    if(input.checked){
        gsap.to("label #toggle",{
            x:23.7
        });
        
        // toggle.style.backgroundColor="black";
        // container.style.backgroundColor="white";
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }else{
        gsap.to("label #toggle",{
            x:0
        });
        // toggle.style.backgroundColor="white";
        // container.style.backgroundColor="black";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";    
    }
})