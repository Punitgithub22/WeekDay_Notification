function displayMessage() {
    let dayChoice = document.getElementById("dayChoice").value;
    let message;

    // Hide all GIFs
    let gifs = document.querySelectorAll('img');
    gifs.forEach(gif => gif.classList.add('hidden'));

    switch (dayChoice) {
        case "Monday":
            message = "Start of a new week!";
            document.getElementById("mondayGif").classList.remove('hidden');
            break;
        case "Tuesday":
            message = "Getting into the week.";
            document.getElementById("tuesdayGif").classList.remove('hidden');
            break;
        case "Wednesday":
            message = "Halfway through the week!";
            document.getElementById("wednesdayGif").classList.remove('hidden');
            break;
        case "Thursday":
            message = "Almost there, one more day!";
            document.getElementById("thursdayGif").classList.remove('hidden');
            break;
        case "Friday":
            message = "Have a great weekend!";
            document.getElementById("fridayGif").classList.remove('hidden');
            break;
        case "Saturday":
            message = "Enjoy your weekend!";
            document.getElementById("saturdayGif").classList.remove('hidden');
            break;
        case "Sunday":
            message = "Enjoy your weekend!";
            document.getElementById("sundayGif").classList.remove('hidden');
            break;
        default:
            message = "Please select a valid day.";
    }

    document.getElementById("message").innerText = message;
}
