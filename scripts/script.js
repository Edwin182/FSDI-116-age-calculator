
function calculateAge() {

    let birthday = document.getElementById("birthday").value;
    let result = document.getElementById("result");

    // Check if the user entered a birthday
    if (birthday === "") {
        result.innerText = "Please enter your birthday.";
        return;
    }

    // Get the birth date and today's date
    let birthDate = new Date(birthday + "T00:00:00");
    let today = new Date();

    // Check if the birthday is in the future
    if (birthDate > today) {
        result.innerText = "Please enter a valid birthday.";
        return;
    }

    // Calculate years, months, and days
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if the number of days is negative
    if (days < 0) {
        months--;

        days += new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
    }

    // Adjust if the number of months is negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result
    result.innerText = "You are " + years + " years, " +
        months + " months, and " + days + " days old.";

}
