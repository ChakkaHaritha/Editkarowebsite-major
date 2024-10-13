document.getElementById('email-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendDataToGoogleSheets({ email });
    document.getElementById('subscription-status').innerText = 'Thank you for subscribing!';
});

document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        message: event.target.message.value
    };
    await sendDataToGoogleSheets(formData);
    document.getElementById('form-status').innerText = 'Thank you for getting in touch!';
});

async function sendDataToGoogleSheets(data) {
    try {
        const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

function showCategory(category) {
    document.getElementById('video-display').innerHTML = <p>Displaying ${category} videos...</p>;
    // Add logic here to load and display videos.
}