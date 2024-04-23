// JavaScript function to toggle accordion content
function toggleAccordion(sectionNumber) {
    var content = document.querySelector('.accordion-item:nth-child(' + sectionNumber + ') .accordion-content');
    
    // Toggle the 'display' property to show/hide the content
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}