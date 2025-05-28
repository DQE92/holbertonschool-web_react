interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstname: "Alice",
    lastname: "Johnson",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstname: "Bob",
    lastname: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];


const tableBody = document.querySelector("#studentsTable tbody");

    // Render each student in a new row
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstname;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tableBody?.appendChild(row);
});
