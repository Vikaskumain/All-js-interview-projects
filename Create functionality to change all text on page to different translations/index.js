
const translations = {
    en: {
        title: "Hello, World!",
        content: "This is English language .....?"
    },
    fr: {
        title: "Bonjour tout le monde !",
        content: "Ceci est un contenu d'exemple."
    },
    
    // Add more translations as needed
};

// Function to translate the page content based on the selected language
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Event listener for language select dropdown
document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.value;
    translatePage(selectedLanguage);
});

// Initial translation (default: English)
translatePage('en');
