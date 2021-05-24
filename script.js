// First, we take the strings we want to change in the HTML
let countEl = document.getElementById("count-el");
let prevEl = document.getElementById("prev-el");
//-------------------------------------------------------------

// Second, we store the value of 'count' in a variable
let count = 0;

// Third, we create the functions for adding, saving and restarting our 'count'

// This will be our function for adding.
function add() {
    count += 1;
    countEl.textContent = count;
}

// This will be our function for saving the counts
function save() {
    let saveCount = count + " - "
    prevEl.textContent += " " + saveCount;
}

// Finally, we write the function for restarting the count

function restart() {
    let restFn = 0;
    document.getElementById("count-el").innerHTML = restFn;
    count = restFn;
}