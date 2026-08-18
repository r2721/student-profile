// Get elements
const themeButton = document.getElementById("themeButton");
const profileButton = document.getElementById("profileButton");
const searchCourse = document.getElementById("searchCourse");


// DARK MODE
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});


// SHOW / HIDE PROFILE
profileButton.addEventListener("click", function () {

    const profile = document.querySelector(".profile");

    if (profile.style.display === "none") {

        profile.style.display = "block";
        profileButton.textContent = "Hide Profile";

    } else {

        profile.style.display = "none";
        profileButton.textContent = "Show Profile";

    }

});


// SEARCH COURSES
searchCourse.addEventListener("input", function () {

    const searchText = searchCourse.value.toLowerCase();

    const courses = document.querySelectorAll(".course");

    courses.forEach(function (course) {

        const courseName =
            course.querySelector("h3").textContent.toLowerCase();

        if (courseName.includes(searchText)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }

    });

});