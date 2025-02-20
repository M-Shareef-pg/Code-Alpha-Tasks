document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const birthdateInput = document.getElementById('birthdate');
    const yearsElement = document.getElementById('years');
    const monthsElement = document.getElementById('months');
    const daysElement = document.getElementById('days');

    calculateBtn.addEventListener('click', calculateAge);

    function calculateAge() {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();

        if (birthdate > today) {
            alert('Please select a date in the past');
            return;
        }

        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();

        // Adjust for negative month difference
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }

        // Adjust for negative day difference
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthdate.getDate());
            days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
            months--;
        }

        // Handle month overflow
        if (months < 0) {
            months += 12;
        }

        displayAge(years, months, days);
    }

    function displayAge(years, months, days) {
        yearsElement.textContent = years;
        monthsElement.textContent = months;
        daysElement.textContent = days;
    }
});