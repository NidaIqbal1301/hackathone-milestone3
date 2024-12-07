// Add interactivity to dynamically generate the resume
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("resume-output");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Get the form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var profileImgUrl = document.getElementById("profile-img").value;
        var education = document.getElementById("education").value;
        var gradYear = document.getElementById("grad-year").value;
        var workTitle = document.getElementById("work-title").value;
        var company = document.getElementById("company").value;
        var workDuration = document.getElementById("work-duration").value;
        var skills = document.getElementById("skills").value.split(',');
        // Clear the previous resume preview
        resumeOutput.innerHTML = '';
        // Create the dynamic resume
        var resumeHTML = "\n            <h3>Personal Information</h3>\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            ").concat(profileImgUrl ? "<img src=\"".concat(profileImgUrl, "\" alt=\"").concat(name, "'s Profile Picture\">") : '', "\n            \n            <h3>Education</h3>\n            <p>").concat(education, " (Graduated: ").concat(gradYear, ")</p>\n            \n            <h3>Work Experience</h3>\n            <p><strong>").concat(workTitle, "</strong> at <em>").concat(company, "</em> (").concat(workDuration, ")</p>\n            \n            <h3>Skills</h3>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
});
