// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form and results container
    const pollForm = document.getElementById('poll-form');
    const pollResults = document.getElementById('poll-results');

    // Define the function to be called when the "Submit Vote" button is clicked
    window.submitVote = function () {
        // Get the selected option
        const selectedOption = document.querySelector('input[name="option"]:checked');

        if (selectedOption) {
            // Get the corresponding result element and update the count
            const optionId = selectedOption.value + '-count';
            const optionCountElement = document.getElementById(optionId);

            if (optionCountElement) {
                const currentCount = parseInt(optionCountElement.innerText);
                optionCountElement.innerText = (currentCount + 1).toString();

                // Reset the form and display the results
                pollForm.reset();
                pollResults.style.display = 'block';
            }
        }
    };
});
