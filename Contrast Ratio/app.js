
const colourDisplay = {
	bacgkround:	document.getElementById('colour-window'),
	foreground: document.getElementById('colour-window__foreground-colour')
}

const backgroundInput = document.getElementById('background-input')
const foregroundInput = document.getElementById('foreground-input')
const submitInputs = document.getElementById('submit-inputs')
const resultDisplay = document.getElementById('result-display')

let backgroundColour = {
	inputString: '',
	type: '',
	valid: false,
	rawRGB: [],
	alpha: 1
}

let foregroundColour = {
	inputString: '',
	type: '',
	valid: false,
	rawRGB: [],
	alpha: 1
}

function identifyInput(inputString) {
	if (inputString.includes('#')) {
		return 'hex'
	} else if (inputString.includes('hsl')) {
		return 'hsl'
	} else if (inputString.includes('rgb')) {
		return 'rgb'
	} else {
		return 'invalid'
	}
}

function classifyInput(colour) {
	const type = identifyInput(colour.inputString)

	if (type !== 'invalid') {
		return {
			...colour,
			type: type,
			valid: true
		}
	} else {
		return {
			...colour,
			type: '',
			valid: false
		}
	}
}

function showError(type) {
	const errorMessage = {
		foreground: 'Foreground input is not a valid format.',
		background: 'Background input is not a valid format.',
		both: 'Neither input is a valid format.'
	}

	resultDisplay.classList.add('result-display--error')

	switch (type) {
		case 'BOTH_INVALID':
			resultDisplay.textContent = errorMessage.both
			break
		case 'BACKGROUND_INVALID':
			resultDisplay.textContent = errorMessage.background
			break
		case 'FOREGROUND_INVALID':
			resultDisplay.textContent = errorMessage.foreground
			break
		default:
			break
	}
}

function clearError() {
	resultDisplay.classList.remove('result-display--error')
	resultDisplay.textContent = 'No Errors'
}

function calculateContrast() {
	backgroundColour.inputString = backgroundInput.value.toLowerCase()
	foregroundColour.inputString = foregroundInput.value.toLowerCase()

	// Identify and validate inputs.
	backgroundColour = classifyInput(backgroundColour)
	foregroundColour = classifyInput(foregroundColour)
		
	console.log(backgroundColour)
	console.log(foregroundColour)

	// Show error if one or both inputs are invalid.
	if (!backgroundColour.value && !foregroundColour.valid) {
		showError('BOTH_INVALID')
	} else if (!backgroundColour.valid) {
		showError('BACKGROUND_INVALID')
	} else if (!foregroundColour.valid) {
		showError('FOREGROUND_INVALID')
	} else {
		clearError()

		// Convert HSL and HEX values to RGB.
		// Convert RGB values to raw RGB.

		// Calculate contrast ratios.

	}
}

// Input submission event listeners:
submitInputs.addEventListener('click', () => calculateContrast())

document.addEventListener('keypress', event => {
	// Clicking the button with the mouse gives it focus, resulting in the calculateContrast() function being called
	// twice unless the user manually de-focuses the button, as pressing Enter will activate the focused DOM element.

	// This check will only call calculateContrast() if the button is not already focused.

	if (document.activeElement !== submitInputs) {
		event.code === 'Enter' && calculateContrast()
	}
})