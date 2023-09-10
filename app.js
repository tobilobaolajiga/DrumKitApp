document.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if (!audio){
        return;
    }else{
    audio.currentTime=0;
    audio.play();  
    };
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    key.classList.add('playing');
    console.log(e);
})

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if (e.propertyName === 'transform'){
    this.classList.remove('playing');
    } else{
        return;
    }
}

