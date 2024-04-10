document.addEventListener("DOMContentLoaded", function() {
    const inputsContainer = document.getElementById("inputsContainer");
    const expectedGradeElement = document.getElementById("expectedGrade");
    let expectedGrade = 0;

    function calculateExpectedGrade() {
        expectedGrade = 0;

        const inputGroups = document.querySelectorAll(".input-group");
        inputGroups.forEach(inputGroup => {
            const numberInputs = inputGroup.querySelectorAll(".numberInput");
            const leftNumber = parseInt(numberInputs[0].value) || 0;
            const rightNumber = parseInt(numberInputs[1].value) || 0;
            const product = leftNumber * rightNumber;
            expectedGrade += product;
        });

        expectedGradeElement.textContent = expectedGrade;
    }

    function createInputGroup() {
        const newInputGroup = document.createElement("div");
        newInputGroup.classList.add("input-group");

        const newInput1 = document.createElement("input");
        newInput1.type = "number";
        newInput1.classList.add("numberInput");
        newInput1.addEventListener("input", calculateExpectedGrade);

        const newInput2 = document.createElement("input");
        newInput2.type = "number";
        newInput2.classList.add("numberInput");
        newInput2.addEventListener("input", calculateExpectedGrade);

        const newAddButton = document.createElement("button");
        newAddButton.textContent = "Add";
        newAddButton.classList.add("addButton");

        const newRemoveButton = document.createElement("button");
        newRemoveButton.textContent = "Remove";
        newRemoveButton.classList.add("removeButton");

        newInputGroup.appendChild(newInput1);
        newInputGroup.appendChild(newInput2);
        newInputGroup.appendChild(newAddButton);
        newInputGroup.appendChild(newRemoveButton);

        inputsContainer.appendChild(newInputGroup);

        return {
            addButton: newAddButton,
            removeButton: newRemoveButton
        };
    }

    // Event delegation to handle dynamically added buttons
    inputsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("addButton")) {
            const newButtons = createInputGroup();
            if (newButtons) {
                newButtons.removeButton.addEventListener("click", function() {
                    newButtons.addButton.parentNode.remove();
                    calculateExpectedGrade();
                });
            }
        }
    });
});
