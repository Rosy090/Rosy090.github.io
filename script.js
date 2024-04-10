document.addEventListener("DOMContentLoaded", function() {
    const inputsContainer = document.getElementById("inputsContainer");

    function createInputGroup() {
        const newInputGroup = document.createElement("div");
        newInputGroup.classList.add("input-group");

        const newInput1 = document.createElement("input");
        newInput1.type = "number";
        newInput1.classList.add("numberInput");

        const newInput2 = document.createElement("input");
        newInput2.type = "number";
        newInput2.classList.add("numberInput");

        const newAddButton = document.createElement("button");
        newAddButton.textContent = "Add";
        newAddButton.classList.add("addButton");

        newInputGroup.appendChild(newInput1);
        newInputGroup.appendChild(newInput2);
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
