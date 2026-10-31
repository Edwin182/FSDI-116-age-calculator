
function calculateAge() {

    let birthday = document.getElementById("birthday").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");

    // Clear previous messages
    result.innerText = "";
    error.innerText = "";

    // Check if the birthday field is empty
    if (birthday === "") {
        error.innerText = "Error: Please enter your birthday.";
        return;
    }

    // Get the birth date and today's date
    let birthDate = new Date(birthday + "T00:00:00");
    let today = new Date();

    // Check for an invalid date
    if (isNaN(birthDate.getTime())) {
        error.innerText = "Error: Please enter a valid date.";
        return;
    }

    // Check if the birthday is in the future
    if (birthDate > today) {
        error.innerText = "Error: Your birthday cannot be in the future.";
        return;
    }

    // Check if the birthday is more than 120 years ago
    let oldestAllowed = new Date(
        today.getFullYear() - 120,
        today.getMonth(),
        today.getDate()
    );

    if (birthDate < oldestAllowed) {
        error.innerText = "Error: Please enter a birthday within the last 120 years.";
        return;
    }

    // Calculate age in years, months, and days
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days when negative
    if (days < 0) {
        months--;

        days += new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
    }

    // Adjust months when negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result
    result.innerText = "You are " + years + " years, " +
        months + " months, and " + days + " days old.";

}
