toggle = true;
const audiohaha = new Audio("../urkdestroyer/audio/big-impact-7054.mp3")

function explode() {
    if (toggle) {
        const explosive = document.getElementById("explosive")
        explosive.style.display = "block";

        toggle = false;
    } else {
        setInterval(() => {
            explosive.style.display = "none";

            toggle = true
        }, 1000);
    }
    audiohaha.play()
}