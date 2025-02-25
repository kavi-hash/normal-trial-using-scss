const texts = [
    "DEVELOPER",
    "DESIGNER",
    "ANALYIST"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

document.getElementById('trialForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const firstNameError = firstNameInput.nextElementSibling;

    if (firstNameInput.value.length < 3) {
        firstNameInput.classList.add('error');
        firstNameError.style.display = 'block';
    } else {
        firstNameInput.classList.remove('error');
        firstNameError.style.display = 'none';
    }

});
images[currentIndex].classList.add('active');