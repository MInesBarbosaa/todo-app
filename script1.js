const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

const items = [];
const items = getItems();

// listener for a click or keypress

taskInput.addEventListener("keyup", processKeyPress);
addButton.addEventListener("click", addNewItem);

// When the buttons is clicked or something is tipping in the input, the functions defined inside the listeners are run
items.forEach(item => {
    tasks.appendChild(CreateElementForTask(item));
});

addButton.addEventListener('click', addNewItem);
taskInput.addEventListener('keyup', processKeyPress);

function processKeyPress(event) {
    // console.log(event.key);   this allows to obtain only the letters that were tipped, instead of other informations

    // Remove the disable from the Add button if soemthing is tipped
    addButton.disabled = event.target.value.trim() === ""; // Verify if this is empty or not
    addButton.disabled = event.target.value.trim() === "";

    // console.log(event.target.value.trim === ""); 

    if (event.key === "Enter") {
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
    console.log(task);
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

function addNewItem() {
   // console.log(taskInput.value);  gives what is put in the input when add is pressed

   const task = {
       value: taskInput.value,
       complete: false
   } // creates an array 
    let newItem = createElementForTask(task);
    tasks.appendChild(newItem);

   items.push(task);
    taskInput.value = "";
    taskInput.focus();
}

//checkbox.onchange = function (event) {
//    item.complete = event.target.checked;
//    saveItems();
//};

   let newItem = createElementForTask(task);
   //tasks.appendChild(newItem);

   taskInput.value = "";
   taskInput.focus();
//get data out of local storage
function getItems() {
    const noItemsFound = "[]";
    const itemsJSON = localStorage.getItem('items') || noItemsFound;
    return JSON.parse(itemsJSON);
}

//save data in local storage
function saveItems() {
    const data = JSON.stringify(items);
    localStorage.setItem('items', data);
}
