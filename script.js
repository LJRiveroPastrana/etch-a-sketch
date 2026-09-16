
const container = document.querySelector(".grid-container");
const btnReset = document.querySelector(".reset");
const opContainer = document.querySelector(".options-container")
const btnCreate = document.createElement("button")

opContainer.appendChild(btnCreate);
btnCreate.textContent = "Create"

function createGrid(grid) {
    
    for (let i = 1; i <= grid; i++) {
            const fila = document.createElement("div");
            fila.classList.add("fila");

            for (let j = 0; j < grid; j++) {
                const celda = document.createElement("div");
                celda.classList.add("celda");
                
                fila.appendChild(celda);
                    celda.addEventListener("mouseover",()=>{
                    celda.style.backgroundColor = "black";
                })
               
            }
            container.appendChild(fila);

        }
};
 createGrid(16);   



btnReset.addEventListener('click',()=>{
    container.innerHTML = ""
    createGrid(16);
});
btnCreate.addEventListener('click',()=>{
    container.innerHTML = "";
    
   let size = parseInt(prompt("Choose the size grid (1-100):")); 
    if (isNaN(size) || size < 1 || size > 100){
        alert("Write a valid number fron 1 to 100")
    }else{
        createGrid(size);
    }
 });

