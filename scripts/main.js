const textarea = document.getElementsByClassName('textarea')[0];
const numberOfCharacters = document.getElementById('numberOfCharacters');
const createQRcodeBtn = document.getElementById('create-qr-btn');

const qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 200,
	height : 200
});


textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    if (currentLength < maxLength) {
        numberOfCharacters.textContent = currentLength;
    }
});

createQRcodeBtn.addEventListener("click", event => {
  makeCode();
})

function makeCode ( text ) {		
	const elText = document.getElementById("textarea");
	
	if (!elText.value && !text) {
		alert("Input a text");
		elText.focus();
    
		return;
	}
	
	qrcode.makeCode(elText.value || text);
}

makeCode('Input a text');