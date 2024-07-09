document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const recipients = document.getElementById('recipients').value.split(',');

    let result = '';

    recipients.forEach(recipient => {
        const recipientNumber = recipient.trim();
        const whatsappURL = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodeURIComponent(message)}`;

        result += `<p>Message to <a href="${whatsappURL}" target="_blank">${recipientNumber}</a> via WhatsApp</p>`;
    });

    document.getElementById('result').innerHTML = result;
});
