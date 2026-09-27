const containerDiv = document.querySelector("#container");
const input = document.querySelector("input");
const confirmBtn = document.querySelector("#confirm-btn");

confirmBtn.addEventListener("click", () => {
    const validatedInput = Number(input.value.trim());

    if (!Number.isInteger(validatedInput) || validatedInput > 100) return;
    containerDiv.innerHTML = "";

    const size = validatedInput;
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("cell");

        div.style.width = `${size} / ${100}`;
        containerDiv.appendChild(div);
    }
})