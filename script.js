const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

const items = getItems();

items.forEach(item => {
    tasks.appendChild(CreateElementForTask(item));
});


taskInput.addEventListener('keyup', processKeyPress);
addButton.addEventListener('click', addNewItem);


function processKeyPress(event) {
    addButton.disabled = event.target.value.trim() === "";
    
    if (event.key === "Enter" && event.target.value.trim() != "") {
        addNewItem();
    }
}

function createElementForTask(task) {
    const template = document.getElementById("taskTemplate");
    const newListItem = template.content.cloneNode(true);

    const checkbox = newListItem.querySelector(".item-check");
    const text = newListItem.querySelector(".item-text");
    const deleteButton = newListItem.querySelector(".delete");

    text.innerText = task.value;
    checkbox.checked = task.complete;

    deleteButton.onclick = function(event) {
        event.target.closest('li').remove();
        items.splice(items.indexOf(task), 1);
        saveItems();
    }
    return newListItem;
}

function addNewItem() {
    const task = {
        value: taskInput.value,
        complete: false
    };

    items.push(task);
    saveItems();

    let newItem = createElementForTask(task);
    tasks.appendChild(newItem);

    taskInput.value = "";
    taskInput.focus();
}

    function getItems() {
        const noItemsFound = "[]";
        const itemsJSON = localStorage.getItem('items') || noItemsFound;
        return JSON.parse(itemsJSON);
}

    function saveItems() {
        const data = JSON.stringify(items);
        localStorage.setItem('items', data);
    });
};

