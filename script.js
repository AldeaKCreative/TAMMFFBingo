document.addEventListener('DOMContentLoaded', () => {
    const bingoCard = document.getElementById('bingo-card');
    const shuffleButton = document.getElementById('shuffle-button');
    const timestampElement = document.createElement('div');
    timestampElement.classList.add('timestamp');
    bingoCard.parentElement.appendChild(timestampElement);

    const filmBingoItems = [
        'Actor Breaks Character', 'Unnecessary Sequel', 'Villain Monologue', 
        'Product Placement', 'Plot Twist', 'Love Triangle', 'CGI Overload', 
        'Chase Scene', 'Fakeout Death', 'Iconic Line', 'Unbelievable Stunt', 
        'Unlikely Hero', 'Cliffhanger Ending', 'Random Cameo', 'Slow Motion Scene', 
        'Unexpected Death', 'Misleading Trailer', 'Overused Special Effect', 
        'Inappropriate Song Choice', 'Character Dies Too Early', 'Unexplained Mystery', 
        'Director Cameo', 'Soundtrack Gets Stuck in Head', 'Movie Breaks Fourth Wall', 
        'Fight Scene in the Rain', 'A Plot Point Never Resolved'
    ];

    // Function to get current date and time
    function getCurrentTimestamp() {
        const now = new Date();
        const timestamp = now.toLocaleString(); // Format: 'MM/DD/YYYY, HH:mm:ss'
        return `Card generated at: ${timestamp}`;
    }

    // Function to generate a random bingo card
    function generateRandomCard() {
        const shuffledItems = [...filmBingoItems].sort(() => 0.5 - Math.random());
        bingoCard.innerHTML = ''; // Clear existing content

        // Generate bingo cells
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            cell.classList.add('bingo-cell');
            
            if (i === 12) {
                cell.textContent = 'Free Space'; // You could add a fun film-related message here
                cell.classList.add('free-space', 'clicked');
            } else {
                cell.textContent = shuffledItems.pop();
            }

            cell.addEventListener('click', () => {
                if (!cell.classList.contains('free-space')) {
                    cell.classList.toggle('clicked');
                }
            });

            bingoCard.appendChild(cell);
        }

        // Update timestamp
        timestampElement.textContent = getCurrentTimestamp();
    }

    // Initialize with a random card and timestamp
    generateRandomCard();

    // Shuffle button functionality
    shuffleButton.addEventListener('click', generateRandomCard);
});
