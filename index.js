const containerDiv = document.querySelector("#container");
const input = document.querySelector("input");
const confirmBtn = document.querySelector("#confirm-btn");

confirmBtn.addEventListener("click", () => {
    const validatedInput = Number(input.value.trim());

    if (!Number.isInteger(validatedInput) || validatedInput > 100) return;
    containerDiv.innerHTML = "";

    const size = validatedInput;
    for (let i = 0; i < size * size; i++) {
        // cell configs
        const div = document.createElement("div");
        div.classList.add("cell");

        div.style.width = `${100 / size}%`;
        div.style.height = `${100 / size}%`;
        
        // hover effect
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });

        containerDiv.appendChild(div);
    }
});