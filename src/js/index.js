(function() {

    console.log("log log")

    let errorFile = new Audio('../src/assets/error.wav');
    let succesFile = new Audio('../src/assets/succes.wav');
    let playButton = document.getElementById("playbtn");
    let form = document.getElementById("myForm");
    let forminputs = document.querySelectorAll("input");

    console.log(forminputs);

    forminputs.forEach(function(inputs) {
        console.log(inputs)
        inputs.addEventListener("input", play);

        function play() {
            if (inputs.checkValidity() === false) {
                errorFile.play();
                console.log("het is fout!")
                // return false
            } else {
                succesFile.play();
                // return true
                console.log("het is goed")
            }
        }
    })

    // name.addEventListener("input", handlePlayButton);

    // console.log(name)

    // function handlePlayButton() {
    //   if(name.checkValidity() === false){
    //       errorFile.play();
    //       console.log("het is fout!")
    //       // return false
    //   }else{
    //     succesFile.play();
    //     // return true
    //     console.log("het is goed")
    //   }
    // }

})();