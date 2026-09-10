
const input = document.querySelector(".grid-value"); 
const container = document.querySelector(".grid-container");
const btnReset = document.querySelector(".reset");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {       
        
        const n = parseInt(input.value);        
       
        if (isNaN(n) || n < 1 || n > 16) {
            alert("Por favor, introduce un número etre 1 y 16");
            return;
        }      
        container.innerHTML = "";

      
        for (let i = 0; i < n; i++) {
            const fila = document.createElement("div");
            fila.classList.add("fila");

            for (let j = 0; j < n; j++) {
                const celda = document.createElement("div");
                celda.classList.add("celda");
                celda.dataset.fila = i;
                celda.dataset.columna = j;
                fila.appendChild(celda);

                celda.addEventListener("mouseover",()=>{
                    celda.style.backgroundColor = "black";
                })
            }
            container.appendChild(fila);
        }
    }
});

btnReset.addEventListener('click',()=>{
    container.innerHTML = "";
    input.value  = "";
    input.focus();
});
