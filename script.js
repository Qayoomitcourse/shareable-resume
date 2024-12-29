// Get reference to form and display area
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
if (form) {
    form.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault();
        // Collect input values
        var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || "Not Provided";
        var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || "Not Provided";
        var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || "Not Provided";
        var education = ((_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value) || "Not Provided";
        var experience = ((_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value) || "Not Provided";
        var skills = ((_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value) || "Not Provided";
        // Generate the resume content dynamically
        var resumeHTML = "\n            <h2><b>Resume</b></h2>\n            <h3><b>Personal Details</b></h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n            <h3><b>Education</b></h3>\n            <p>").concat(education, "</p>\n            <h3><b>Experience</b></h3>\n            <p>").concat(experience, "</p>\n            <h3><b>Skills</b></h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display the generated resume
        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeHTML;
        }
        else {
            console.error('The Resume Display element is missing');
        }
    });
}
else {
    console.error('The Resume Form element is missing');
}
