

addButton.addEventListener("click", function () {

    // Making new Li

    var inputText = document.getElementById("inputText");
    const addButton = document.getElementById("addButton");
    const newLi = document.createElement("li");
    newLi.id = "newli"
    const node = document.createTextNode(inputText.value);
    newLi.appendChild(node);

    // Adding Crose icon and there Functionality  

    const xIcon = document.createElement("i");
    xIcon.className = "xmark fa-solid fa-xmark"
    newLi.appendChild(xIcon)

    xIcon.addEventListener("click", function (){
        console.info("Task was Removed!")
        newLi.style.display = "none"
    })

    // Adding Validatioin to intup is Not Empty

    if (inputText.value === "") {
        alert("Input Task is Undefine. Please Enter Task First");
    } else {
        const taskList = document.getElementById("taskList");
        taskList.appendChild(newLi);
        inputText.value = "";
        console.info("Task is Added!")
    }
})

