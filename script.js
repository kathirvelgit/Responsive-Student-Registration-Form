
// Select the form element
const studentForm = document.getElementById("studentForm");

// Select the table body where rows will be added
const tablebody = document.getElementById("tablebody");

// Listen for form submission
studentForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();
    
    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

   // Create a new table row
    const newRow = document.createElement("tr");

    // Add form data to the row
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Append row to table
    tablebody.appendChild(newRow);
    
    // Clear the form
    studentForm.reset();
});   