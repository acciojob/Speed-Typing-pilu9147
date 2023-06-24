// Fetch a random quote from the API
function fetchRandomQuote() {
	fetch('http://api.quotable.io/random')
		.then(response => response.json())
		.then(data => {
			document.getElementById('quote').textContent = data.content;
			startTimer();
		})
		.catch(error => console.log(error));
}

// Check if the typed text matches the quote
function checkTypedText() {
	const quoteInput = document.getElementById('quoteInput');
	const quoteText = document.getElementById('quote').textContent;
	const typedText = quoteInput.value;

	if (typedText === quoteText) {
		quoteInput.style.backgroundColor = 'green';
		clearInputArea();
		fetchRandomQuote();
		setTimeout(() => {
			quoteInput.style.backgroundColor = '';
		}, 3000);
	} else {
		quoteInput.style.backgroundColor = 'red';
	}
}

// Clear the input area and reset the timer
function clearInputArea() {
	document.getElementById('quoteInput').value = '';
	document.getElementById('timer').textContent = '0';
}

// Start the timer
function startTimer() {
	let seconds = 0;
	const timer = document.getElementById('timer');
	timer.textContent = seconds;

	setInterval(() => {
		seconds++;
		timer.textContent = seconds;
	}, 1000);
}

// Event listener for typing input
document.getElementById('quoteInput').addEventListener('input', checkTypedText);

// Fetch the initial random quote
fetchRandomQuote();
