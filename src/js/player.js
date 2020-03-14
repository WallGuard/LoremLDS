/* eslint-disable */

let music = document.getElementById('music'); 
let duration;
let pButton = document.getElementById('pButton');
let playhead = document.getElementById('playhead');
let timeline = document.getElementById('timeline');
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

class Player {
	constructor(
		music,
		duration,
		pButton,
		pButton,
		playhead,
		timeline,
		timelineWidth,
		onplayhead = false
		){
		this.music = music;
		this.duration = duration;
		this.pButton = pButton;
		this.playhead = playhead;
		this.timeline = timeline;
		this.timelineWidth = timelineWidth;
		this.onplayhead = onplayhead;
	}

music = this.music.addEventListener("timeupdate", timeUpdate, false);

timeline = this.timeline.addEventListener("click", function (event) {
	moveplayhead(event);
	music.currentTime = duration * clickPercent(event);
}, false);

clickPercent(e) {	return (e.pageX - timeline.offsetLeft) / timelineWidth;
}
 
playhead = this.playhead.addEventListener('mousedown', mouseDown, false);
window = window.addEventListener('mouseup', mouseUp, false);
 
mouseDown() {
	this.onplayhead = true;
	window.addEventListener('mousemove', moveplayhead, true);
	music.removeEventListener('timeupdate', timeUpdate, false);
}

mouseUp(e) {
	if (this.onplayhead == true) {
		moveplayhead(e);
		window.removeEventListener('mousemove', moveplayhead, true);
		music.currentTime = duration * clickPercent(e);
		music.addEventListener('timeupdate', timeUpdate, false);
	}
	onplayhead = false;
}

moveplayhead(e) {
	let newMargLeft = e.pageX - timeline.offsetLeft;
	if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
		playhead.style.marginLeft = newMargLeft + "px";
	}
	if (newMargLeft < 0) {
		playhead.style.marginLeft = "0px";
	}
	if (newMargLeft > timelineWidth) {
		playhead.style.marginLeft = timelineWidth + "px";
	}
}
 
timeUpdate = () => {
	let playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.marginLeft = playPercent + "px";
	if (music.currentTime == duration) {
		pButton.className = "";
		pButton.className = "play";
	}
}

play = () => {
	if (music.paused) {
		music.play();
		pButton.className = "";
		pButton.className = "pause";
	} else {
		music.pause();
		pButton.className = "";
		pButton.className = "play";
	}
}

music = this.music.addEventListener("canplaythrough", function () {
	duration = music.duration;  
}, false);

}

player = new Player()

window.player = player;
