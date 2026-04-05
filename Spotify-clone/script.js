let play = document.getElementById("play")
let progressBar = document.getElementById("progressBar")
let audio = new Audio()


play.addEventListener('click', () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        document.getElementById('play').classList.replace("fa-play", "fa-pause")
    }
    else {
        audio.pause();
        play.classList.replace("fa-pause", "fa-play")
    }
})

audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #80ff0087 ${progress}%, #c0c0c0 ${progress}%)`
})

progressBar.addEventListener("input", function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #80ff0087 ${value}%, #c0c0c0 ${value}%)`
    audio.currentTime = (progressBar.value * audio.duration) / 100;
})



let mutebtn = document.getElementById("toggle-soundbtn")  // it returns html collection not a single element
let volumeBar = document.getElementById("volumeBar")


volumeBar.addEventListener('input', () => {
    audio.volume = parseFloat(volumeBar.value);
    if (audio.volume == 0) {
        audio.muted = true;
        document.getElementById('toggle-soundbtn').classList.replace("fa-volume-high", "fa-volume-xmark")
    } else {
        audio.muted = false;
        document.getElementById('toggle-soundbtn').classList.replace("fa-volume-xmark", "fa-volume-high")
    }
})

mutebtn.addEventListener("click", () => {
    audio.muted = !audio.muted;

    if (audio.muted) {
        volumeBar.value = 0;
        document.getElementById('toggle-soundbtn').classList.replace("fa-volume-high", "fa-volume-xmark")
        // document.querySelector(".toggle-soundbtn").classList.replace("fa-volume-high", "fa-volume-xmark")
    }
    else {
        volumeBar.value = audio.volume || 0.5;
        document.getElementById('toggle-soundbtn').classList.replace("fa-volume-xmark", "fa-volume-high")
    }
})


async function getSongs() {
    let arrSongs = await fetch("http://127.0.0.1:3000/audio/")
    let response = await arrSongs.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName('a')
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs
}

async function main() {
    let songs = await getSongs();

    let container = document.getElementById('songContainer');

    songs.forEach((song, index) => {
        //extract song name
        let songName = decodeURIComponent(song.split("audio").pop().replace(".mp3", ""));

        //create Card
        let card = document.createElement('div');
        card.classList.add("card", "treanding-card");

        card.innerHTML = `
            <div class="img-cnt">
                <img src="./image/THE BENJO BEAT.jpg" alt="">
                <div class="play-icon">
                    <i class="playbtn fa-solid fa-play" data-src="${song}"></i>

                </div>
            </div>
            <div class="info-cnt">
                <span>${songName}</span>
                <span>Unknown Artist</span>
            </div>
        `;
        container.appendChild(card);
    });
    attachPlayEvents();
}
function attachPlayEvents() {
    let buttons = document.querySelectorAll(".playbtn");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let songSrc = e.currentTarget.dataset.src;

            if (audio.src.includes(songSrc) && !audio.paused) {
                audio.pause();
                btn.classList.replace("fa-pause", "fa-play");
                play.classList.replace("fa-pause", "fa-play");
                return;
            }

            audio.src = songSrc;
            audio.play();

            buttons.forEach(b => {
                b.classList.replace("fa-pause", "fa-play");
            });

            btn.classList.replace("fa-play", "fa-pause");
            play.classList.replace("fa-play", "fa-pause");
        });
    });
}

main()




//                    // <i data-src="${song}" class="playbtn fa-solid fa-play"><i>