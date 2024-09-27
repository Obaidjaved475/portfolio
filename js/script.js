// Function to get query parameter by name
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

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
