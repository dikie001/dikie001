function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate === "") {
        alert("Please enter your birth date.");
        return;
    }

    const birthDate = new Date(birthdate);
    const now = new Date();

    const diffMs = now - birthDate;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    const years = Math.floor(diffDays / 365.25); // Considering leap years
    const months = Math.floor((diffDays % 365.25) / 30.44); // Average days per month
    const days = Math.floor((diffDays % 365.25) % 30.44);

    const ageMessage = `
        You are ${years} years, ${months} months, and ${days} days old.
        This is equivalent to ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, and ${diffSeconds} seconds.
    `;

    document.getElementById('result').textContent = ageMessage;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});