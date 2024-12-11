// Login Functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple validation (can be replaced with real backend validation)
            if (username === 'user1' && password === '1111') {
                alert('Login Successful!');
                window.location.href = 'main.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    const bookingForm = document.getElementById('bookingDetails');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Your Ticket has been booked successfully,we will notify you about further information and payment option in inbox!');
        });
    }
});

// Change Transport Type
function selectTransport(transport) {
    const transportType = document.getElementById('transportType');
    transportType.textContent = `Booking for: ${transport}`;
}
