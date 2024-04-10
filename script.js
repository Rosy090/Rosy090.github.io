document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".addButton");
    const inputsContainer = document.getElementById("inputsContainer");

    addButton.addEventListener("click", function() {
        const newInputGroup = document.createElement("div");
        newInputGroup.classList.add("input-group");

        const newInput = document.createElement("input");
        newInput.type = "number";
        newInput.classList.add("numberInput");

        const newAddButton = document.createElement("button");
        newAddButton.textContent = "Add";
        newAddButton.classList.add("addButton");

        newInputGroup.appendChild(newInput);
        newInputGroup.appendChild(newAddButton);

        inputsContainer.appendChild(newInputGroup);
    });

    inputsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("addButton")) {
            const newInputGroup = document.createElement("div");
            newInputGroup.classList.add("input-group");

            const newInput = document.createElement("input");
            newInput.type = "number";
            newInput.classList.add("numberInput");

            const newAddButton = document.createElement("button");
            newAddButton.textContent = "Add";
            newAddButton.classList.add("addButton");

            newInputGroup.appendChild(newInput);
            newInputGroup.appendChild(newAddButton);

            inputsContainer.insertBefore(newInputGroup, event.target.parentNode.nextSibling);
        }
    });
});