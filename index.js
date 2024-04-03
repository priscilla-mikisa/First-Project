const PINK=['a','s','d','f','j','k','k'];
const BLUE=['r','t','y','u','i'];
let keys = document.querySelectorAll('.key');
let pinkKeys = document.querySelectorAll('.key.pink');
let blueKeys = document.querySelectorAll('.key.blue');
keys.forEach(key =>{
    key.addEventListener('click',()=> playMusic(key));
});

document.addEventListener('keydown',e=>{
    let key = e.key;
    let whiteKeyIndex=white.indexOf(key);
    let blackKeyIndex=black.indexOf(key);

    if (whiteKeyIndex>-1) playMusic(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex>-1)playMusic(blackKeys[blackKeyIndex]);
});
function playMusic(key){
    const audio=document.getElementById(key.dataset.note)
    audio.currentTime=0;
    audio.play();
}