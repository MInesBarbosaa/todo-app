//(async function () {
    
const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

//const items = await getItems();
const items = getItems();

items.forEach((item) => {
    tasks.appendChild(CreateElementForTask(item));
});

addButton.addEventListener('click', addNewItem);
taskInput.addEventListener('keyup', processKeyPress);

function processKeyPress(event) {
    addButton.disabled = event.target.value.trim() === "";
    
    if (event.key === "Enter" && event.target.value.trim() != "") {
        addNewItem();
    }
}

//const items = [
    // Test Items
    //{ value: "my item", complete: false },
    //{ value: "my item 2", complete: false },
//];

//for (let item of items) {
//    const li = createElementForTask(item);
//    tasks.appendChild(li);
//}


function createElementForTask(task) {
    // Create new List items
    const template = document.getElementById("taskTemplate");
    const newListItem = template.content.cloneNode(true);

    const checkbox = newListItem.querySelector(".item-check");
    const text = newListItem.querySelector(".item-text");
    const deleteButton = newListItem.querySelector(".delete");

    text.innerText = task.value;
    checkbox.checked = task.complete;

    deleteButton.onclick = function (event) {
        event.target.closest('li').remove();
        items.splice(items.indexOf(item), 1);
        saveItems();
    };
    return newListItem;
}

function addNewItem() {
    //console.log("Add new item!");
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

//checkbox.onchange = function (event) {
//    item.complete = event.target.checked;
//    saveItems();
//};


//get data out of local storage
//async 
    function getItems() {
        const noItemsFound = "[]";
        const itemsJSON = localStorage.getItem('items') || noItemsFound;
        return JSON.parse(itemsJSON);

//    const request = await fetch('https://todo-api-ff.azurewebsites.net/api/todo', {
//        method: 'GET',
//        headers: { 'Content-Type': 'application/json' }
//    });
//    const itemsJson = (await request.text()) || "[]";
//    return JSON.parse(itemsJson);

}

//save data in local storage
//async 
    function saveItems() {
        const data = JSON.stringify(items);
        localStorage.setItem('items', data);

//    const data = JSON.stringify(items);
//    await fetch('https://todo-api-ff.azurewebsites.net/api/todo', {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: data
    });
}

//}());

