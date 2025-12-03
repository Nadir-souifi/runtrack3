document.addEventListener('DOMContentLoaded', function() {
    const keylogger = document.getElementById('keylogger');

    document.addEventListener('keydown', function(event) {
        const key = event.key;

        if (document.activeElement === keylogger) {
            keylogger.value += key + key; // Append the key twice if focused on textarea
        } else {
            keylogger.value += key; // Append the key once otherwise
        }
    });
});
