// Function to get query parameter by name
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// document.addEventListener("DOMContentLoaded", () => {
                    
//     const projectsContainer = document.getElementById('projects-container');

//     for (let proId in contentData) {
//         if (contentData.hasOwnProperty(proId)) {
//             const projectDiv = document.createElement('div');
//             projectDiv.className = "margin-50px"; // Matches your CSS class

//             // Dynamically add HTML without inline styles
//             projectDiv.innerHTML = `
//                 <a href="detail_projects.html?project=${proId}" class="portfolio-wrapper w-inline-block">
//                     <div>
//                         <img src="${contentData[proId].section1Image}" alt="${contentData[proId].heading}" class="image-3">
//                     </div>
//                     <div class="work-circle">
//                         <div>View<br><em>work<br></em></div>
//                     </div>
//                     <div class="flex-project">
//                         <h3 class="project-title">${contentData[proId].heading}</h3>
//                         <p class="category">${contentData[proId].service}</p>
//                     </div>
//                     <div class="work-overlay"></div>
//                 </a>
//             `;

//             // Append the new project div to the container
//             projectsContainer.appendChild(projectDiv);
//         }
//     }
// });


// document.addEventListener("DOMContentLoaded", () => {
//     // Reference to the container
//     const projectsContainer = document.getElementById('projects-container');

//     // Loop through the contentData object and generate content
//     for (let proId in contentData) {
//         if (contentData.hasOwnProperty(proId)) {
//             // Create a new div for each project
//             const projectDiv = document.createElement('div');
//             projectDiv.className = "margin-50px"; // Adding the same class as the original

//             // Set the inner HTML for the project div using the original structure
//             projectDiv.innerHTML = `
//                 <a data-w-id="9fec94b4-bd62-1afa-72ca-a659668207c3" href="detail_projects.html?project=${proId}" aria-current="page" class="portfolio-wrapper w-inline-block ">
//                     <div>
//                         <img alt="" loading="lazy" style="filter:grayscale(100%)" src="${contentData[proId].section1Image}" class="image-3">
//                     </div>
//                     <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="work-circle">
//                         <div>View<br><em>work<br>‍</em></div>
//                     </div>
//                     <div class="flex-project">
//                         <h3 style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="project-title">${contentData[proId].heading}</h3>
//                         <p style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="category">${contentData[proId].service}</p>
//                     </div>
//                     <div style="opacity:0" class="work-overlay"></div>
//                 </a>
//             `;

//             // Append the new project div to the container
//             projectsContainer.appendChild(projectDiv);
//         }
//     }
// });


//follow cursor position
// document.addEventListener("DOMContentLoaded", () => {
//     const projectLinks = document.querySelectorAll('.portfolio-wrapper');

//     projectLinks.forEach(link => {
//         const workCircle = link.querySelector('.work-circle');

//         // Mouse movement event listener on each project link
//         link.addEventListener('mousemove', (e) => {
//             const rect = link.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;

//             // Move the .work-circle to follow the mouse
//             workCircle.style.transform = `translate(${x - 75}px, ${y - 75}px)`; // Adjust based on size
//             workCircle.style.opacity = 1; // Ensure circle appears
//         });

//         // Reset position when the mouse leaves
//         link.addEventListener('mouseleave', () => {
//             workCircle.style.transform = `translate(0, 0)`;
//             workCircle.style.opacity = 0; // Hide the circle when not hovering
//         });
//     });
// });


// Get the project number from the URL
const projectId = getQueryParameter('project');

document.addEventListener("DOMContentLoaded", () => {
    // Check if a valid project ID is found
    if (contentData[projectId]) {
        const projectContent = contentData[projectId];

        // Set the heading and paragraph
        const title = document.querySelector(".title1");
        if (title) title.textContent = projectContent.heading;

        const subhead = document.querySelector(".subhead");
        if (subhead) subhead.textContent = projectContent.subhead;

        // Update the section 1 image dynamically
        const section1Image = document.querySelector(".photo-interaction img");
        if (section1Image) section1Image.src = projectContent.section1Image;

        // Populate service, client, and year
        const service = document.querySelector("#service .paragraph");
        if (service) service.textContent = projectContent.service;

        const client = document.querySelector("#client .paragraph");
        if (client) client.textContent = projectContent.client;

        const year = document.querySelector("#year .paragraph");
        if (year) year.textContent = projectContent.year;

        // Check if section2Images exists and has content
        if (projectContent.section2Images && projectContent.section2Images.length > 0) {
            const secondSectionImages = document.querySelectorAll(".project-page-grid img");

            // Ensure that we have enough images in the array and the DOM
            secondSectionImages.forEach((img, index) => {
                if (projectContent.section2Images[index]) {
                    img.src = projectContent.section2Images[index]; // Assign image
                    img.style.opacity = "1"; // Ensure image is visible
                } else {
                    console.warn(`No image available for index ${index} in section2Images`);
                }
            });
        } else {
            console.error("section2Images is missing or empty for projectId:", projectId);
        }

        // Populate the first rich text block
        const richTextBlock1Heading = document.querySelector(".rich-text-block h1");
        if (richTextBlock1Heading) richTextBlock1Heading.textContent = projectContent.richTextBlock1.heading;

        const richTextBlock1Content = document.querySelector(".rich-text-block p");
        if (richTextBlock1Content) richTextBlock1Content.textContent = projectContent.richTextBlock1.content;

        // Populate the unordered list
        const unorderedList = document.querySelector(".rich-text-block ul");
        if (unorderedList) unorderedList.innerHTML = projectContent.unorderedList.map(item => `<li>${item}</li>`).join('');

       // Populate the second rich text block
    const richTextBlock2 = document.querySelector("#rich2");

    if (richTextBlock2) {
    const richTextBlock2Heading = richTextBlock2.querySelector("h3");
    if (richTextBlock2Heading) richTextBlock2Heading.textContent = projectContent.richTextBlock2.heading;

    const richTextBlock2Content = richTextBlock2.querySelector("p");
    if (richTextBlock2Content) richTextBlock2Content.textContent = projectContent.richTextBlock2.content;

    const richTextBlock2Blockquote = richTextBlock2.querySelector("blockquote");
    if (richTextBlock2Blockquote) richTextBlock2Blockquote.textContent = projectContent.richTextBlock2.blockquote;
}


    } else {
        // Handle case where no projectId is found or invalid ID
        const title = document.querySelector(".title1");
        if (title) title.textContent = "Project Not Found";
    }
});
