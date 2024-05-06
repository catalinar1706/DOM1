
let button = document.querySelector("button");


button.addEventListener("click",
    function(){
        let input = document.querySelector("input").value;
        let section = document.querySelector(".recibido");
        section.innerText = "hola " +input
    }
    
)