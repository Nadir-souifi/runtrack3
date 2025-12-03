document.addEventListener('keydown', function(event) {
    const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightBA';
    let input = '';

    input += event.key;

    if (input === konamiCode) {
        document.body.style.backgroundColor = 'yellow'; // Change to your desired style
        alert('Konami code activated!');
        input = ''; // Reset input after activation
    }
});  
