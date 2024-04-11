document.addEventListener("DOMContentLoaded", function() {
    const inputsContainer = document.getElementById("inputsContainer");
    const expectedGradeElement = document.getElementById("expectedGrade");
    let expectedGrade = 0.0;
    let a = 0;
    setInterval(calculateExpectedGrade, 50);
    function calculateExpectedGrade() {
        expectedGrade = 0.0;

        const inputGroups = document.querySelectorAll(".input-group");
        if(a!=0)
        {
            inputGroups.forEach(inputGroup => {
                const numberInputs = inputGroup.querySelectorAll(".numberInput");
                if(numberInputs<=0)
                {
                    const leftNumber = parseFloat(numberInputs[0].value) || 0;
                    const rightNumber = parseFloat(numberInputs[1].value) || 0;
                    const product = leftNumber * rightNumber;
                    expectedGrade += product;
                }
            });
        }
        expectedGrade = Math.round(expectedGrade * 100) / 100;

        expectedGradeElement.textContent = expectedGrade.toFixed(2);
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

    inputsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("addButton")) {
            const newButtons = createInputGroup();
            a+=1;
            if (newButtons) {
                newButtons.removeButton.addEventListener("click", function() {
                    newButtons.addButton.parentNode.remove();
                    a-=1;
                });
            }
        }
    });
});
