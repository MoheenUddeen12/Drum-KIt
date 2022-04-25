const firstRow = [
    ['Q', 'Clap', 81],
    ['W', 'Hihat', 87],
    ['E', 'Kick', 69],
    ['R', 'Openhat', 82],
    ['T', 'Boom', 84],
    ['Y', 'Ride', 89],
    ['U', 'Snare', 85],
    ['I', 'Tink', 73],
    ['O', 'Tom', 79],
    ['P', 'Cymbal', 80],
]

const secondRow = [
    ['A', 'Clap', 65],
    ['S', 'Hihat', 83],
]

const firstEl = document.querySelector('#firstRow')

const firstStr = firstRow.map(el => {
    return `
    <div data-key="${el[2]}" class="key">
        <kbd>${el[0]}</kbd>
        <span class="sound"> ${el[1]} </span>
      </div>
    `
})

firstEl.innerHTML = firstStr.join('');



function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {

    let keyCode = e.keyCode || e.target.dataset.key

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = document.querySelectorAll('.key')
Array.from(keys).forEach(key => {
    console.log()
    key.addEventListener('transitionend', removeTransition)
    key.addEventListener('click', playSound);
});


window.addEventListener('keydown', playSound);