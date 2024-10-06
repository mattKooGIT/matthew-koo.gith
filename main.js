//button
function namePrompt(){
    var userInput = prompt("Who's viewing this website?");
    //check if the user provides input
    if (userInput !== null && userInput.trim() !== "") {
    //get the output div element
        let output = document.getElementById('nameOutput');
    //create a new element to display user's input
        let name = document.createElement('p');
        name.textContent = "The user viewing this website is: " + userInput;
    //append new element to the output div
        output.appendChild(name);
    }
    //if no input
    else {
        alert("No input provided.")
    }
}

//Open the dropdown when user clicks on it
function dropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

//Close the dropdown when user clicks on dropdown again
window.onclick = function(event) {
    if (!event.target.matches("dropdown-btn")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains(".show")){
                openDropdown.classList.remove(".show");
            }
        }
    }
}

//Enlarge Image
//Function to increase size image
function enlarge() {
    img = document.getElementById("profilePic");
    img.classList.toggle("enlarge");
}
