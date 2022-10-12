    let clicker = document.getElementById("clicker");
    let out = 0;

    function addScore() {
        out++
        clicker.innerText = out;
        if (out > 9) {
            out = 0
        }
    
    }

  