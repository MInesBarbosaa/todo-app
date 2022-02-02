const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

const items = [];

// listener for a click or keypress

taskInput.addEventListener("keyup", processKeyPress);
addButton.addEventListener("click", addNewItem);

// When the buttons is clicked or something is tipping in the input, the functions defined inside the listeners are run


function processKeyPress(event) {
    // console.log(event.key);   this allows to obtain only the letters that were tipped, instead of other informations
    
    // Remove the disable from the Add button if soemthing is tipped
    addButton.disabled = event.target.value.trim() === ""; // Verify if this is empty or not
    
    // console.log(event.target.value.trim === ""); 
    
    if (event.key === "Enter") {
        addNewItem();
    }
}



function createElementForTask(task) {
    console.log(task);
}



function addNewItem() {
   // console.log(taskInput.value);  gives what is put in the input when add is pressed
    
   const task = {
       value: taskInput.value,
       complete: false
   } // creates an array 

   items.push(task);


   let newItem = createElementForTask(task);
   //tasks.appendChild(newItem);

   taskInput.value = "";
   taskInput.focus();

}

// Templating: we want that some part of the html repeats, in our case is the li element