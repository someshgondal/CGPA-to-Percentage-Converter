// script.js

function convertCGPA() {
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    const resultElement = document.getElementById('result');

    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        resultElement.textContent = 'Please enter a valid CGPA between 0 and 10.';
        resultElement.style.color = 'red';
        return;
    }

    const percentage = cgpa * 9.5;
    resultElement.textContent = `Percentage: ${percentage.toFixed(2)}%`;
    resultElement.style.color = 'green';
}

function toggleView() {
    const converter = document.getElementById('converter');
    const profile = document.getElementById('profile');
    const toggleButtons = document.querySelectorAll('.toggle-button');

    if (converter.classList.contains('hidden')) {
        // Show converter and hide profile
        converter.classList.remove('hidden');
        profile.classList.add('hidden');
        toggleButtons.forEach(button => button.textContent = '☰'); // Set button text
    } else {
        // Show profile and hide converter
        converter.classList.add('hidden');
        profile.classList.remove('hidden');
        toggleButtons.forEach(button => button.textContent = '☰'); // Set button text
    }
}
