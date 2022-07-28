
document.querySelector('button').addEventListener('click',function() {

    let randomNumber1 = Math.floor(Math.random()*6)+1;
    console.log(randomNumber1);
    let sourceImage = "images/dice"+randomNumber1+".png";
    console.log(sourceImage);
    let element = document.querySelector('.img1');
    console.log(element);
    element.setAttribute('src' ,sourceImage)

    let randomNumber2 = Math.floor(Math.random()*6)+1;
    console.log(randomNumber2);
    let sourceImage1 = "images/dice"+randomNumber2+".png";
    console.log(sourceImage1);
    let element1 = document.querySelector('.img2');
    console.log(element1);
    element1.setAttribute('src' ,sourceImage1);


if (randomNumber1>randomNumber2) {
    document.querySelector('h1').innerText = 'Player 1 wins'
}
else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerText = 'Player 2 wins'
}
else{
    document.querySelector('h1').innerText = 'Its a Tie'
}

    
});