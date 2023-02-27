const goku = document.querySelector('.goku');
const pipe = document.querySelector('.pipe');

const jump = () => {
    goku.classList.add('jump');
    setTimeout( () => {
        goku.classList.remove('jump');
    }, 500);
}

const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition)

    if(pipePosition <= 120) {

        pipe.style.animation = 'nome';

    }

} ,10 );

document.addEventListener('keydown', jump);

