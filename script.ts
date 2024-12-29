// Get reference to form and display area
const form = document.getElementById("resume-form") as HTMLFormElement | null;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement | null;

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement | null)?.value || "Not Provided";
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value || "Not Provided";
        const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value || "Not Provided";
        const education = (document.getElementById('education') as HTMLInputElement | null)?.value || "Not Provided";
        const experience = (document.getElementById('experience') as HTMLInputElement | null)?.value || "Not Provided";
        const skills = (document.getElementById('skills') as HTMLInputElement | null)?.value || "Not Provided";

        // Generate the resume content dynamically
        const resumeHTML = `
            <h2><b>Resume</b></h2>
            <h3><b>Personal Details</b></h3>
            <p><b>Name:</b> </span contenteditable="true"> ${name} </span></p>
            <p><b>Email:</b> </span contenteditable="true"> ${email}</span></p>
            <p><b>Phone:</b> </span contenteditable="true">${phone}</span></p>
            <h3><b>Education</b></h3>
            <p></span contenteditable="true"> ${education}  </span></p>
            <h3><b>Experience</b></h3>
            <p> </span contenteditable="true"> ${experience} </span> </p>
            <h3><b>Skills</b></h3>
            <p> </span contenteditable="true"> ${skills} </span></p>
        `;

        // Display the generated resume
        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeHTML;
        } else {
            console.error('The Resume Display element is missing');
        }
    });
} else {
    console.error('The Resume Form element is missing');
}
