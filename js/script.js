document.addEventListener("DOMContentLoaded", () => {
    // Set the heading and paragraph
    document.querySelector(".title-1").textContent = contentData.heading;
    document.querySelector(".subhead").textContent = contentData.subhead;
  
    // Update the image dynamically
    const section1Image = document.querySelector(".photo-interaction img");
    section1Image.src = contentData.section1Image;
  
    // Populate service, client, and year
    document.querySelector("#w-node-_5a0d06aa-2465-d425-5f15-f365fa44c7c4 .list-title").textContent = "Service";
    document.querySelector("#w-node-_5a0d06aa-2465-d425-5f15-f365fa44c7c4 .paragraph").textContent = contentData.service;
  
    document.querySelector("#w-node-_197e8c63-5d90-b828-6e73-95366a52ecc1 .list-title").textContent = "Client";
    document.querySelector("#w-node-_197e8c63-5d90-b828-6e73-95366a52ecc1 .paragraph").textContent = contentData.client;
  
    document.querySelector("#w-node-a94800e4-a150-0ae2-1859-ae985804caf6 .list-title").textContent = "Year";
    document.querySelector("#w-node-a94800e4-a150-0ae2-1859-ae985804caf6 .paragraph").textContent = contentData.year;
  
    // Populate the second section images
    const secondSectionImages = document.querySelectorAll(".project-page-grid img");
    secondSectionImages.forEach((img, index) => {
      img.src = contentData.section2Images[index];
    });
  
    // Populate the rich text block
    document.querySelector(".rich-text-block h1").textContent = contentData.richTextBlock1.heading;
    document.querySelector(".rich-text-block p").textContent = contentData.richTextBlock1.content;
  
    // Populate the unordered list
    const unorderedList = document.querySelector(".rich-text-block ul");
    unorderedList.innerHTML = contentData.unorderedList.map(item => `<li>${item}</li>`).join('');
  
    // Populate the second rich text block
    const richTextBlock2 = document.querySelector(".rich-text-block:nth-of-type(2)");
    richTextBlock2.querySelector("h3").textContent = contentData.richTextBlock2.heading;
    richTextBlock2.querySelector("blockquote").textContent = contentData.richTextBlock2.blockquote;
  
    // Populate the ordered list
    const orderedList = richTextBlock2.querySelector("ol");
    orderedList.innerHTML = contentData.richTextBlock2.orderedList.map(item => `<li>${item}</li>`).join('');
  });
  