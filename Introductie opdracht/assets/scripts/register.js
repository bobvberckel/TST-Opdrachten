// Making an central array.
let allstudents = [];

// Retrieving HTML Input.
let studentID = document.getElementById(`studentID`);
let studentKlas = document.getElementById9(`studentKlas`);

// Adding event listener to form (When submitted)
formButton.addEventListener(`click`, () => {
    let newArr = [studentID, studentKlas];

    // Pushing the array into the central array.
    allstudents.push(newArr);

    // Showing it on the page
    let pagelist = document.getElementById(`pagelist`);

    for(let i = 0; i < allstudents.length; i++){
        console.log(allstudents[i]);
    }
});
