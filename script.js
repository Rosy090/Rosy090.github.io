document.addEventListener("DOMContentLoaded", function() {
    const inputsContainer = document.getElementById("inputsContainer");

    function createInputGroup() {
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

        return newAddButton;
    }

    const firstAddButton = createInputGroup();


    inputsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("addButton")) {
            const newAddButton = createInputGroup();
            if (newAddButton) {
                newAddButton.remove();
            }
        }
    });
});
