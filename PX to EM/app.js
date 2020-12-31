
const pxInput = document.getElementById('px-input')
const emInput = document.getElementById('em-input')
const defaultFontsizeInput = document.getElementById('default-fontsize-input')

const decimals = 4
const defaultFontsize = 16

pxInput.value = defaultFontsize;
emInput.value = (pxInput.value / defaultFontsizeInput.value).toFixed(decimals);
defaultFontsizeInput.value = defaultFontsize

function clearInputs() {
	pxInput.value = ''
	emInput.value = ''
}

pxInput.addEventListener('focus', () => clearInputs())
emInput.addEventListener('focus', () => clearInputs())

pxInput.addEventListener('input', () => {
	if (!isNaN(pxInput.value) && !isNaN(defaultFontsizeInput.value)) {
		emInput.value = (pxInput.value / defaultFontsizeInput.value).toFixed(decimals)
	}
})

emInput.addEventListener('input', () => {
	if (!isNaN(emInput.value) && !isNaN(defaultFontsizeInput.value)) {
		pxInput.value = (emInput.value * defaultFontsizeInput.value).toFixed(0)
	}
})
