// Function to get query parameter by name
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the project number from the URL
const projectId = getQueryParameter('project');

// Reference to the container
const projectsContainer = document.getElementById('projects-container');

// Function to create project divs
for (let projectId in contentData) {
    // Create a new div for each project
    const projectDiv = document.createElement('div');
    projectDiv.className = "margin-50px"; // Adding the same class as the original

    // Set the inner HTML for the project div using the original structure
    projectDiv.innerHTML = `
                <a data-w-id="9fec94b4-bd62-1afa-72ca-a659668207c3" href="detail_projects.html?project=${projectId}" aria-current="page" class="portfolio-wrapper w-inline-block w--current">
                  <div><img alt="" loading="lazy" style="filter:grayscale(100%)" src="${contentData[projectId].section1Image}" class="image-3"></div>
                  <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="work-circle">
                    <div>View<br><em>work<br>‍</em></div>
                  </div>
                  <div class="flex-project">
                    <h3 style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="project-title">${contentData[projectId].heading}</h3>
                    <p style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="category">${contentData[projectId].service}</p>
                  </div>
                  <div style="opacity:0" class="work-overlay"></div>
                </a>
    `;

    // Append the new project div to the container
    projectsContainer.appendChild(projectDiv);
}document.addEventListener("DOMContentLoaded", () => {
    // Check if a valid project ID is found
    if (contentData[projectId]) {
        const projectContent = contentData[projectId];

        // Set the heading and paragraph
        document.querySelector(".title-1").textContent = projectContent.heading;
        document.querySelector(".subhead").textContent = projectContent.subhead;

        // Update the image dynamically
        const section1Image = document.querySelector(".photo-interaction img");
        section1Image.src = projectContent.section1Image;

        // Populate service, client, and year
        document.querySelector("#w-node-_5a0d06aa-2465-d425-5f15-f365fa44c7c4 .list-title").textContent = "Service";
        document.querySelector("#w-node-_5a0d06aa-2465-d425-5f15-f365fa44c7c4 .paragraph").textContent = projectContent.service;

        document.querySelector("#w-node-_197e8c63-5d90-b828-6e73-95366a52ecc1 .list-title").textContent = "Client";
        document.querySelector("#w-node-_197e8c63-5d90-b828-6e73-95366a52ecc1 .paragraph").textContent = projectContent.client;

        document.querySelector("#w-node-a94800e4-a150-0ae2-1859-ae985804caf6 .list-title").textContent = "Year";
        document.querySelector("#w-node-a94800e4-a150-0ae2-1859-ae985804caf6 .paragraph").textContent = projectContent.year;

        // Populate the second section images
        const secondSectionImages = document.querySelectorAll(".project-page-grid img");
        secondSectionImages.forEach((img, index) => {
            img.src = projectContent.section2Images[index];
        });

        // Populate the rich text block
        document.querySelector(".rich-text-block h1").textContent = projectContent.richTextBlock1.heading;
        document.querySelector(".rich-text-block p").textContent = projectContent.richTextBlock1.content;

        // Populate the unordered list
        const unorderedList = document.querySelector(".rich-text-block ul");
        unorderedList.innerHTML = projectContent.unorderedList.map(item => `<li>${item}</li>`).join('');

        // Populate the second rich text block
        const richTextBlock2 = document.querySelector(".rich-text-block:nth-of-type(2)");
        richTextBlock2.querySelector("h3").textContent = projectContent.richTextBlock2.heading;
        richTextBlock2.querySelector("blockquote").textContent = projectContent.richTextBlock2.blockquote;

        // Populate the ordered list
        const orderedList = richTextBlock2.querySelector("ol");
        orderedList.innerHTML = projectContent.richTextBlock2.orderedList.map(item => `<li>${item}</li>`).join('');
    } else {
        // Handle case where no projectId is found or invalid ID
        document.querySelector(".title-1 2").textContent = "Project Not Found";
    }
});

  