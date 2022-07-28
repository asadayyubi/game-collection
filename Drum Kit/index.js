var drumm = document.querySelectorAll('.drum').length;
//console.log(drumm);
for (let i = 0; i < drumm; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        let buttonPressed = this.innerText;
        playSound(buttonPressed);
        shadowAnimation(buttonPressed);
        

    })
}

document.addEventListener('keydown', function (event) {
    
    playSound(event.key);
    shadowAnimation(event.key);
    
})


function playSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            break;

        default: console.log(key);
            break;
    }
    
}

function shadowAnimation(key) {
    
    var classType = document.querySelector('.'+key);
    
    classType.classList.add("pressed");
    setTimeout(() => {
        classType.classList.remove('pressed')
    }, 100);
    
}









