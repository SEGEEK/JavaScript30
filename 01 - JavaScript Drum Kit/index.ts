var keysDown: INumberMap<boolean> = {};

window.addEventListener("keydown", (e) => {
	const audio = <HTMLAudioElement>document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio) return;

	if (keysDown[e.keyCode]) return;

	keysDown[e.keyCode] = true;

	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	key && key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
});

window.addEventListener("keyup", (e) => {
	e.key
	if (keysDown[e.keyCode]) {
		keysDown[e.keyCode] = false;
	}
})



function removeTransition(e: TransitionEvent) {
	if (e.propertyName !== 'transform') return; // skip it if it's not a transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
console.log(keys);
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

for (var key of keys) {
	key.addEventListener('transitionend', removeTransition);
}